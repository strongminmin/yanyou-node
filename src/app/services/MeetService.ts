import { Injectable } from 'kever'
import { MeetInterface } from '../interface'
import { beforeTime } from '../utils'

@Injectable('meet')
export default class MeetService implements MeetInterface {
  async getMeetList(db: any): Promise<any> {
    try {
      const selectSentence = 'select * from schoolmeet order by create_time desc'
      let [rows] = await db.query(selectSentence)
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

  async getMeetDetails(meetId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from schoolmeet where meet_id = ?'
      const [rows] = await db.query(selectSentence, [meetId])
      const result = rows[0]
      result.create_time = beforeTime(result.create_time)
      this.meetAccess(meetId, +result.meet_access + 1, db)
      return result
    } catch (err) {
      return false
    }
  }

  async createMeetDetails(meetInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into schoolmeet(meet_title,meet_content,create_time) values(?,?,?)'
      const [rows] = await db.query(insertSentence, [meetInfo.title, meetInfo.content, createTime])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async updateMeetDetails(meetId: number, meetInfo: any, db: any): Promise<any> {
    try {
      const updateSentenct = `update schoolmeet set
      meet_title = ?,
      meet_content = ? where meet_id = ?
      `
      const [rows] = await db.query(updateSentenct, [meetInfo.title, meetInfo.content, meetId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async meetAccess(meetId: number, value: number, db: any): Promise<any> {
    try {
      const updateSentence = 'update schoolmeet set meet_access = ? where meet_id = ?'
      const [rows] = await db.query(updateSentence, [value, meetId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async deleteMeet(meetId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from schoolmeet where meet_id = ?'
      const [rows] = await db.query(deleteSentence, [meetId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
