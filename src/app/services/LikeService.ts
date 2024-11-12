import { Injectable } from 'kever'
import { LikeInterface } from '../interface'

@Injectable('like')
export default class LikeService implements LikeInterface {
  async getLike(type: number, userId: number, targetId: number, db: any): Promise<any> {
    try {
      const selectSentenct = `select * from likes where target_id = ${targetId} and like_type = ${type}`
      const checkedPromise = this.checkUser(type, userId, targetId, db)
      const selectLikePromise = db.query(selectSentenct)
      const [checked, selectLike] = await Promise.all([checkedPromise, selectLikePromise])
      const likeCount = selectLike[0].length
      return {
        count: likeCount,
        action: checked
      }
    } catch (err) {
      console.log(err);
      return false
    }
  }
  async likeAction(type: number, userId: number, targetId: number, db: any): Promise<any> {
    try {
      const checked = await this.checkUser(type, userId, targetId, db)
      let sentence = ''
      if (checked) {
        sentence = 'delete from likes where like_type = ? and user_id = ? and target_id = ?'
      } else {
        sentence = 'insert into likes(like_type,user_id,target_id) values(?,?,?)'
      }
      const [rows] = await db.query(sentence, [type, userId, targetId])
      const likeInfo = await this.getLike(type, userId, targetId, db)
      if (rows.affectedRows > 0) {
        return likeInfo
      }
      return false
    } catch (err) {
      return false
    }
  }
  async checkUser(type: number, userId: number, targetId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from likes where like_type = ? and user_id = ? and target_id = ?'
      const [rows] = await db.query(selectSentence, [type, userId, targetId])
      if (rows.length == 0) {
        return false
      }
      return true
    } catch (err) {
      return false
    }
  }
  async deleteLike(type: number, targetId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from likes where like_type = ? and target_id = ?'
      const [rows] = await db.query(deleteSentence, [type, targetId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
