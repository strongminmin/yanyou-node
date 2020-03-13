import { Injectable } from 'kever'
import { HistoryInterface } from '../interface'
import { beforeTime } from '../utils'

@Injectable('history')
export default class HistoryService implements HistoryInterface {
  async getHistoryList(userId: number, page: number, count: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from history where user_id = ? order by create_time desc limit ${(page - 1) * count},${count}`
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
  async createHistory(userId: number, content: string, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into history(user_id,history_content,create_time) values(?,?,?)'
      const [rows] = await db.query(insertSentence, [userId, content, createTime])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async cleanHistory(userId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from history where user_id = ?'
      const [rows] = await db.query(deleteSentence, [userId])
      console.log(rows)
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
