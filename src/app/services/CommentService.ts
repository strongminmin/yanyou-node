import { Injectable } from 'kever'
import { CommentInterface } from '../interface'
import { beforeTime } from '../utils'

@Injectable('comment')
export default class CommentService implements CommentInterface {
  async getCommentList(page: number, count: number, talkId: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from comment limit ${(page - 1) * count}, ${count} where talk_id = ?`
      let [rows] = await db.query(selectSentence, [talkId])
      rows = rows.sort((a, b) => b.create_time - a.create_time)
      const result = rows.map(item => {
        const time = beforeTime(item.create_time)
        return Object.assign(item, {
          create_time: time
        })
      })
      return result
    } catch (err) {
      return false
    }
  }

  async createComment(commentInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into comment(user_id,talk_id,comment_content,create_time) values(?,?,?,?)'
      const [rows] = await db.query(insertSentence, [commentInfo.userId, commentInfo.talkId, commentInfo.commentContent, createTime])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async deleteComment(talkId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from comment where talk_id = ?'
      const [rows] = await db.query(deleteSentence, [talkId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
