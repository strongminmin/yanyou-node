/**
 * 院校信息相关接口service约束
 */
export interface CollegeInterface {
  /**
   * 获取院校列表
   */
  getCollegeList(db: any): Promise<any> 
  /**
   * 获取院校详情
   * @param collegeId 
   * @param db 
   */
  getCollegeDetails(collegeId: number, db: any): Promise<any> 
  /**
   * 创建院校
   * @param collegeInfo 
   * @param db 
   */
  createCollege(collegeInfo: Object, db: any): Promise<any> 
  /**
   * 更新院校信息
   * @param collegeId 
   * @param collegeInfo 
   * @param db 
   */
  updateCollege(collegeId: number, collegeInfo: Object, db: any): Promise<any> 
  /**
   * 删除院校信息
   * @param collegeId 
   * @param db 
   */
  deteleCollege(collegeId: number, db: any): Promise<any> 
}
