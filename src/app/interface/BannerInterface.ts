/**
 * 轮播图相关接口service约束
 */
export interface BannerInterface {
  /**
   * 获取轮播图列表
   * @param db
   */
  getBannerList(db: any): Promise<any>
  /**
   * 删除轮播图
   * @param bannerId
   * @param db
   */
  deleteBanner(bannerId: number, db: any): Promise<any>
  /**
   * 插入一张图片
   * @param bannerImage
   * @param db
   */
  createBanner(bannerImage: string, db: any): Promise<any>
}
