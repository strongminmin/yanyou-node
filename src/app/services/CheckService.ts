import { Injectable } from 'kever'
import { CheckInterface } from '../interface'

@Injectable('check')
export default class CheckService implements CheckInterface {
  async checkIn(userId: number, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into checks(user_id,create_time) values(?,?)'
      const [rows] = await db.query(insertSentence, [userId, createTime])
      if (rows.affectedRows > 0) {
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
        return Object.assign(row, {
          year,
          month,
          day
        })
      })
      return result
    } catch (err) {
      return false
    }
  }
  async todayCheck(userId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select max(create_time) from checks where user_id = ?'
      const [rows] = await db.query(selectSentence, [userId])
      if (rows.length == 0) {
        return false
      }
      const targetTime = rows[0]['max(create_time)'];
      const targetDate = new Date(+targetTime)
      const targetYear = targetDate.getFullYear();
      const targetMonth = targetDate.getMonth();
      const targetDay = targetDate.getDate();
      const nowDate = new Date(Date.now())
      const nowYear = nowDate.getFullYear();
      const nowMonth = nowDate.getMonth();
      const nowDay = nowDate.getDate()
      let checked = false;
      if (targetYear === nowYear && targetMonth === nowMonth && targetDay === nowDay) {
        checked = true
      }
      return checked
    } catch (err) {
      return false
    }
  }
}
