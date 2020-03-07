/**
 * 点赞相关service约束
 */
export interface LikeInterface {
  /**
   * 获取点赞数
   * @param type
   * @param targetId
   * @param db
   */
  getLikeCount(type: number, targetId: number, db: any): Promise<any>
  /**
   * 点赞
   * @param type
   * @param userId
   * @param targetId
   * @param db
   */
  likeAction(type: number, userId: number, targetId: number, db: any): Promise<any>
  /**
   * 检查当前用户是否对该说说点赞
   * @param type
   * @param userId
   * @param targetId
   * @param db
   */
  checkUser(type: number, userId: number, targetId: number, db: any): Promise<any>
  /**
   * 当说说或者评论删除的时候，应当把点赞数据也删除
   * @param type
   * @param targetId
   * @param db
   */
  deleteLike(type: number, targetId: number, db: any): Promise<any>
}
