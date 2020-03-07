/**
 * 院校信息相关接口service约束
 */
export interface CollegeInterface {
  /**
   * 获取院校列表
   * @param db
   */
  getCollegeBaseList(db: any): Promise<any>
  /**
   * 获取院校信息Item详情
   * @param type
   * @param collegeId
   * @param db
   */
  getCollegeItemDetails(type: number, collegeId: number, db: any): Promise<any>
  /**
   * 获取院校基础信息详情
   * @param collegeId
   * @param db
   */
  getCollegeBaseDetails(collegeId: number, db: any): Promise<any>
  /**
   *获取院校Item信息详情
   * @param type
   * @param collegeId
   * @param db
   */
  createCollegeBase(collegeInfo: Object, db: any): Promise<any>
  /**
   * 创建一条院校Item信息
   * @param type
   * @param collegeItemInfo
   * @param db
   */
  createCollegeBaseItem(type: number, collegeId: number, collegeItemInfo: any, db: any): Promise<any>
  /**
   * 更新院校基础信息
   * @param collegeId
   * @param collegeInfo
   * @param db
   */
  updateCollegeBase(collegeId: number, collegeInfo: Object, db: any): Promise<any>
  /**
   * 更新院校Item信息
   * @param type
   * @param collegeItemInfo
   * @param db
   */
  updateCollegeItem(type: number, collegeId: number, collegeItemInfo: any, db: any): Promise<any>
  /**
   * 删除一条院校基础信息
   * @param collegeId
   * @param db
   */
  deteleCollegeBase(collegeId: number, db: any): Promise<any>
  /**
   * 删除一条院校Item信息
   * @param type
   * @param collegeId
   * @param db
   */
  deleteCollegeItem(type: number, collegeId: number, db: any): Promise<any>
}
