import { Injectable } from 'kever'
import { PlanInterface } from '../interface'

@Injectable('plan')
export default class PlanService implements PlanInterface {
  async getPlanList(db: any): Promise<any> {}
  async createPlan(planInfo: object, db: any): Promise<any> {}
  async updatePlan(planId: number, planInfo: object, db: any): Promise<any> {}
  async deletePlan(planId: number): Promise<any> {}
}
