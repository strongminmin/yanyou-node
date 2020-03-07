import { Injectable } from 'kever'
import { AdvisoryInterface } from '../interface'

@Injectable('advisory')
export default class AdvisoryService implements AdvisoryInterface {
  async getAdvisoryList(db: any): Promise<any> {}
  async getAdvisoryDetails(advisoryId: number, db: any): Promise<any> {}
  async createAdvisory(advisoryInfo: Object, db: any): Promise<any> {}
  async updateAdvisoryInfo(advisoryId: number, advisoryInfo: Object, db: any): Promise<any> {}
  async advisoryAccess(advisoryId: number, db: any): Promise<any> {}
  async advisoryReward(advisoryId: number, db: any): Promise<any> {}
}
