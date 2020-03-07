/**
 * 热点相关接口service约束
 */
export interface AdvisoryInterface {
  /**
   * 获取热点列表，分页
   * @param db
   */
  getAdvisoryList(db: any): Promise<any>
  /**
   * 获取热点详情
   * @param advisoryId
   * @param db
   */
  getAdvisoryDetails(advisoryId: number, db: any): Promise<any>
  /**
   * 创建一个热点
   * @param advisoryInfo
   * @param db
   */
  createAdvisory(advisoryInfo: Object, db: any): Promise<any>
  /**
   * 更新热点信息
   * @param advisoryid
   * @param advisoryInfo
   * @param db
   */
  updateAdvisoryInfo(advisoryId: number, advisoryInfo: Object, db: any): Promise<any>
  /**
   * 热点访问量
   * @param advisoryid
   * @param db
   */
  advisoryAccess(advisoryId: number, db: any): Promise<any>
  /**
   * 热点打赏数
   * @param advisoryId
   * @param db
   */
  advisoryReward(advisoryId: number, db: any): Promise<any>
}
