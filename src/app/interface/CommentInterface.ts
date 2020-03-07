/**
 * 评论相关service约束
 */
export interface CommentInterface {
  /**
   * 获取评论列表
   * @param talkId
   * @param db
   */
  getCommentList(page: number, count: number, talkId: number, db: any): Promise<any>
  /**
   * 创建一条评论
   * @param commentInfo
   * @param db
   */
  createComment(commentInfo: Object, db: any): Promise<any>
  /**
   * 删除一条评论
   * @param talkId
   * @param db
   */
  deleteComment(talkId: number, db: any): Promise<any>
}
