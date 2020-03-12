/**
 * 热点相关接口service约束
 */
export interface AdvisoryInterface {
  /**
   * 获取热点列表，分页
   * @param page
   * @param count
   * @param db
   */
  getAdvisoryList(page: number, count: number, db: any): Promise<any>
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
  updateAdvisory(advisoryId: number, advisoryInfo: Object, db: any): Promise<any>
  /**
   * 更新热点信息-单调
   * @param advisoryId
   * @param key
   * @param value
   * @param db
   */
  updateInfo(advisoryId: number, key: string, db: any): Promise<any>
}
