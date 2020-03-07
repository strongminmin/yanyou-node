import { Injectable } from 'kever'
import { MeetInterface } from '../interface'

@Injectable('meet')
export default class MeetService implements MeetInterface {
  async getMeetList(db: any): Promise<any> {}

  async getMeetDetails(meetId: number, db: any): Promise<any> {}

  async createMeetDetails(meetInfo: object, db: any): Promise<any> {}

  async updateMeetDetails(meetId: number, meetInfo: object, db: any): Promise<any> {}

  async meetAccess(meetId: number, db: any): Promise<any> {}
}
