/**
 * 资源相关service约束
 */
export interface PlanInterface {
  /**
   * 获取资源列表
   * @param db
   */
  getPlanList(db: any): Promise<any>
  /**
   * 创建一个资源
   * @param planInfo
   * @param db
   */
  createPlan(planInfo: object, db: any): Promise<any>
  /**
   * 更新资源
   * @param planId
   * @param planInfo
   * @param db
   */
  updatePlan(planId: number, planInfo: object, db: any): Promise<any>
  /**
   * 删除资源
   * @param planId
   */
  deletePlan(planId: number): Promise<any>
}
