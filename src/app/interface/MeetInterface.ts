/**
 * 校研会相关接口
 */
export interface MeetInterface {
  /**
   * 获取会议列表
   * @param db
   */
  getMeetList(db: any): Promise<any>
  /**
   * 获取会议详情
   * @param meetId
   * @param db
   */
  getMeetDetails(meetId: number, db: any): Promise<any>
  /**
   * 创建一个会议
   * @param meetInfo
   * @param db
   */
  createMeetDetails(meetInfo: object, db: any): Promise<any>
  /**
   * 更新会议信息
   * @param meetId
   * @param meetInfo
   * @param db
   */
  updateMeetDetails(meetId: number, meetInfo: object, db: any): Promise<any>
  /**
   * 访问量
   * @param meetId
   * @param db
   */
  meetAccess(meetId: number, db: any): Promise<any>
}
