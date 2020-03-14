import { Injectable } from 'kever'
import { TalkInterface } from '../interface'
import { uploadOss, beforeTime } from '../utils'

@Injectable('talk')
export default class TalkService implements TalkInterface {
  async getTalkList(page: number, count: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from talk  order by create_time desc limit ${(page - 1) * count}, ${count}`
      let [rows] = await db.query(selectSentence)
      const result = rows.map(item => {
        const time = beforeTime(item.create_time)
        return Object.assign(item, {
          create_time: time
        })
      }).filter(item => item.talk_status == 0)
      return result
    } catch (err) {
      return false
    }
  }
  async getTalkSelfList(userId: number, page: number, count: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from talk  where user_id = ? order by create_time desc limit ${(page - 1) * count}, ${count}`
      let [rows] = await db.query(selectSentence, [userId])
      const result = rows.map(item => {
        const time = beforeTime(item.create_time)
        return Object.assign(item, {
          create_time: time
        })
      })
      return result
    } catch (err) {
      return false
    }
  }
  async createTalk(userId: number, content: string, images: Array<File>, db: any): Promise<any> {
    try {
      const filesPath = await uploadOss('talk', images)
      const talkContnet = JSON.stringify({
        content,
        images: filesPath
      })
      const createTime = Date.now()
      const insertSentence = 'insert into talk(user_id,talk_content,create_time) values(?,?,?)'
      const [rows] = await db.query(insertSentence, [userId, talkContnet, createTime])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      console.log(err);
      return false
    }
  }
  async deleteTalk(talkId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from talk where talk_id = ?'
      const [rows] = await db.query(deleteSentence, [talkId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async disableTalk(talkId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select talk_status from talk where talk_id = ?'
      const updateSentence = 'update talk set talk_status = ? where talk_id = ?'
      const [talkInfo] = await db.query(selectSentence, [talkId])
      const talkstatus = talkInfo.talk_status == 1 ? 0 : 1
      const [rows] = await db.query(updateSentence, [talkstatus, talkId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
