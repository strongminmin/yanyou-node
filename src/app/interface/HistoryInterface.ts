/**
 * 浏览记录相关service约束
 */
export interface HistoryInterface {
  /**
   * 获取用户浏览记录列表
   * @param userId
   * @param db
   */
  getHistoryList(userId: number, db: any): Promise<any>
  /**
   * 生成一条浏览记录
   * @param user_id
   * @param content
   * @param db
   */
  createHistory(user_id: number, content: string, db: any): Promise<any>
  /**
   * 清空历史记录
   * @param userId
   * @param db
   */
  clearnHistory(userId: number, db: any): Promise<any>
}
