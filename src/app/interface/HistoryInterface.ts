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
   * @param historyInfo
   * @param db
   */
  createHistory(historyInfo: object, db: any): Promise<any>
}
