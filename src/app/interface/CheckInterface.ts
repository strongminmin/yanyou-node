/**
 * 打卡相关接口service
 */
export interface CheckInterface {
  /**
   * 打卡操作
   * @param userId
   * @param db
   */
  checkIn(userId: number, db: any): Promise<any>
  /**
   * 查询打卡,存在反会相应数字，不存在返回0
   * @param userId
   * @param db
   */
  todayCheck(userId: number, db: any): Promise<any>
  /**
   * 获取打卡记录
   * @param userId
   * @param db
   */
  getCheckList(userId: number, db: any): Promise<any>
}
