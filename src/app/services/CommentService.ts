import { Injectable } from 'kever'
import { CommentInterface } from '../interface'

@Injectable('comment')
export default class CommentService implements CommentInterface {
  async getCommentList(page: number, count: number, talkId: number, db: any): Promise<any> {}

  async createComment(commentInfo: Object, db: any): Promise<any> {}

  async deleteComment(talkId: number, db: any): Promise<any> {}
}
