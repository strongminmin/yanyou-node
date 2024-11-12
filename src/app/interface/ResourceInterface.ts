/**
 * 资源相关service约束
 */
export interface ResourceInterface {
  /**
   * 获取资源列表
   * @param db
   */
  getResourceList(db: any): Promise<any>
  /**
   * 创建一个资源
   * @param resourceInfo
   * @param db
   */
  createResource(resourceInfo: any, db: any): Promise<any>
  /**
   * 更新资源
   * @param resourceId
   * @param resourceInfo
   * @param db
   */
  updateResource(resourceId: number, resourceInfo: any, db: any): Promise<any>
  /**
   * 删除资源
   * @param resourceId
   * @param db
   */
  deleteResource(resourceId: number, db: any): Promise<any>
}
