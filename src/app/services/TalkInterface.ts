import { Injectable } from 'kever'
import { TalkInterface } from '../interface'

@Injectable('talk')
export default class TalkService implements TalkInterface {
  async getTalkList(db: any): Promise<any> {}
  async createTalk(userid: number, db: any): Promise<any> {}
  async deleteTalk(talkId: number, db: any): Promise<any> {}
}
