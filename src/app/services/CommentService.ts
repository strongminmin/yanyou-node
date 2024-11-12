import { Injectable } from 'kever'
import { CommentInterface } from '../interface'
import { beforeTime } from '../utils'

@Injectable('comment')
export default class CommentService implements CommentInterface {
  async getCommentList(page: number, count: number, talkId: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from comment where talk_id = ? order by create_time desc limit ${(page - 1) * count}, ${count} `
      let [rows] = await db.query(selectSentence, [talkId])
      const result = rows.map(item => {
        const time = beforeTime(item.create_time)
        return Object.assign(item, {
          create_time: time
        })
      })
      return result
    } catch (err) {
      console.log(err);
      return false
    }
  }

  async createComment(commentInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const insertSentence = 'insert into comment(user_id,talk_id,comment_content,create_time) values(?,?,?,?)'
      const [rows] = await db.query(insertSentence, [commentInfo.userId, commentInfo.targetId, commentInfo.commentContent, createTime])
      const count = await this.getCommentCount(commentInfo.targetId, db);
      console.log(count)
      if (rows.affectedRows > 0) {
        return count
      }
      return false
    } catch (err) {
      console.log(err);
      return false
    }
  }

  async deleteComment(talkId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from comment where talk_id = ?'
      const selectSentence = 'select comment_id where talk_id = ?'
      const [commentInfo] = await db.query(deleteSentence, [talkId])
      const [rows] = await db.query(deleteSentence, [talkId])
      const commentIds = commentInfo.map(item => item.comment_id);
      if (rows.affectedRows > 0) {
        return commentIds
      }
      return []
    } catch (err) {
      return []
    }
  }
  async getCommentCount(talkId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from comment where talk_id = ?'
      const [rows] = await db.query(selectSentence, [talkId])
      return rows.length;
    } catch (err) {
      return 0;
    }
  }
}
