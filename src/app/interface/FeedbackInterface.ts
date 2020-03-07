/**
 * 系统反馈相关service约束
 */
export interface FeedbackInterface {
  /**
   * 获取反馈列表
   * @param db
   */
  getFeedbackList(db: any): Promise<any>
  /**
   * 更新反馈状态
   * @param feedbackId
   * @param db
   */
  updateFeedbackStatus(feedbackId: number, db: any): Promise<any>
  /**
   * 删除反馈信息
   * @param feedbackId
   * @param db
   */
  deleteFeedback(feedbackId: number, db: any): Promise<any>
  /**
   * 创建一条反馈
   * @param feedbackInfo
   * @param db
   */
  createFeedback(feedbackInfo: object, db: any): Promise<any>
}
