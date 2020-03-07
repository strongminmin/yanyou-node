import { Injectable } from 'kever'
import { MessageInterface } from '../interface'

@Injectable('message')
export default class MessageService implements MessageInterface {
  async getMessageList(userId: number, db: any): Promise<any> {}

  async createMessage(messageInfo: object, db: any): Promise<any> {}
}
