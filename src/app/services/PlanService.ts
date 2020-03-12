import { Injectable } from 'kever'
import { PlanInterface } from '../interface'
import { beforeTime } from '../utils'
@Injectable('plan')
export default class PlanService implements PlanInterface {
  async getPlanList(userId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from plan where user_id = ?'
      let [rows] = await db.query(selectSentence, [userId])
      rows = rows.sort((a, b) => b.create_time - a.create_time)
      const result = rows.reduce((res, item) => {
        const month = item.plan_month
        item.create_time = beforeTime(item.create_time)
        if (!res[month]) {
          res[month] = []
        }
        res[month].push(item)
        return res
      }, {})
      return result
    } catch (err) {
      return false
    }
  }

  async createPlan(userId: number, planInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into plan(user_id,plan_month,plan_content,create_time) values(?,?,?,?)'
      const [rows] = await db.query(insertSentence, [userId, planInfo.month, planInfo.content, createTime])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async deletePlan(planId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from plan where plan_id = ?'
      const [rows] = await db.query(deleteSentence, [planId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
