/**
 *系统消息相关service约束
 */
export interface MessageInterface {
  /**
   * 获取消息列表
   * @param userId
   * @param db
   */
  getMessageList(userId: number, db: any): Promise<any>
  /**
   * 生成一条消息
   * @param messageInfo
   * @param db
   */
  createMessage(messageInfo: object, db: any): Promise<any>
}
