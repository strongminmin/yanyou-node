import { Injectable } from 'kever'
import { LikeInterface } from '../interface'

@Injectable('like')
export default class LikeService implements LikeInterface {
  async getLikeCount(type: number, targetId: number, db: any): Promise<any> {}
  async likeAction(type: number, userId: number, targetId: number, db: any): Promise<any> {}
  async checkUser(type: number, userId: number, targetId: number, db: any): Promise<any> {}
  async deleteLike(type: number, targetId: number, db: any): Promise<any> {}
}
