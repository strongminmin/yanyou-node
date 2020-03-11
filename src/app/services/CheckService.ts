import { Injectable } from 'kever'
import { CheckInterface } from '../interface'

@Injectable('check')
export default class CheckService implements CheckInterface {
  async checkIn(userId: number, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into checks(user_id,create_time) values(?,?)'
      const [rows] = await db.query(insertSentence, [userId, createTime])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async getCheckList(userId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from checks where user_id = ?'
      const [rows] = await db.query(selectSentence, [userId])
      const result = rows.map(row => {
        const date = new Date(+row.create_time)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const time = date.toLocaleTimeString()
        return Object.assign(row, {
          create_date: `${year}年${month}月${day}日`,
          create_time: time
        })
      })
      return result
    } catch (err) {
      return false
    }
  }
  async getCheckNum(userId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from checks where user_id = ?'
      const [rows] = await db.query(selectSentence, [userId])
      return rows.length
    } catch (err) {
      return false
    }
  }
}
