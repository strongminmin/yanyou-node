import { Injectable } from 'kever'
import { PlanInterface } from '../interface'
@Injectable('plan')
export default class PlanService implements PlanInterface {
  async getPlanList(userId: number, db: any): Promise<any> {}

  async createPlan(userId: number, planInfo: object, db: any): Promise<any> {}

  async deletePlan(planId: number, db: any): Promise<any> {}
}
