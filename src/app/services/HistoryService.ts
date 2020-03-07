import { Injectable } from 'kever'
import { HistoryInterface } from '../interface'

@Injectable('history')
export default class HistoryService implements HistoryInterface {
  async getHistoryList(userId: number, db: any): Promise<any> {}
  async createHistory(historyInfo: object, db: any): Promise<any> {}
}
