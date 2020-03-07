/**
 * 说说相关service约束
 */
export interface TalkInterface {
  /**
   * 获取说说列表
   * @param db
   */
  getTalkList(db: any): Promise<any>
  /**
   * 创建一条说说
   * @param userid
   * @param talkInfo
   * @param db
   */
  createTalk(userid: number, talkInfo: Object, db: any): Promise<any>
  /**
   * 删除一条说说
   * @param talkId
   * @param db
   */
  deleteTalk(talkId: number, db: any): Promise<any>
}
