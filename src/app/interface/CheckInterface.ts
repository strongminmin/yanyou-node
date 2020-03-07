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
  getUserCheckNum(userId: number, db: any): Promise<any>
  /**
   * 更新打卡记录
   * @param userId
   * @param count
   * @param db
   */
  updateCheckNum(userId: number, count: number, db: any): Promise<any>
  /**
   * 创建打卡记录
   * @param userId
   * @param db
   */
  craeteUserCheck(userId: number, db: any): Promise<any>
}
