import { Injectable } from 'kever'
import { CheckInterface } from '../interface'

@Injectable('check')
export default class CheckService implements CheckInterface {
  async checkIn(userId: number, db: any): Promise<any> {}
  async getUserCheckNum(userId: number, db: any): Promise<any> {}
  async updateCheckNum(userId: number, count: number, db: any): Promise<any> {}
  async craeteUserCheck(userId: number, db: any): Promise<any> {}
}
