import { Injectable } from 'kever'
import { HistoryInterface } from '../interface'
import { beforeTime } from '../utils'

@Injectable('history')
export default class HistoryService implements HistoryInterface {
  async getHistoryList(userId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from history where user_id = ?'
      let [rows] = await db.query(selectSentence, [userId])
      rows = rows.sort((a, b) => b.create_time - a.create_time)
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
      const insertSentence = 'inert into history(user_id,history_content,create_time) values(?,?,?)'
      const [rows] = await db.query(insertSentence, [userId, content, createTime])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async clearnHistory(userId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from history where user_id = ?'
      const [rows] = await db.query(deleteSentence, [userId])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
