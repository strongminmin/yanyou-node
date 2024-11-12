/**
 * 月计划相关service约束
 */
export interface PlanInterface {
  /**
   * 获取计划列表
   * @param userId
   * @param db
   */
  getPlanList(userId: number, db: any): Promise<any>
  /**
   * 创建一个计划
   * @param userId
   * @param planInfo
   * @param db
   */
  createPlan(userId: number, planInfo: any, db: any): Promise<any>
  /**
   * 删除一个计划
   * @param planId
   * @param db
   */
  deletePlan(planId: number, db: any): Promise<any>
}
