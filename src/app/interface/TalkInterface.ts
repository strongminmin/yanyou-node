/**
 * 说说相关service约束
 */
export interface TalkInterface {
  /**
   * 获取说说列表
   * @param page
   * @param count
   * @param db
   */
  getTalkList(page: number, count: number, db: any): Promise<any>
  /**
   * 获取自己发布的心情
   * @param userId 
   * @param page 
   * @param count 
   * @param db 
   */
  getTalkSelfList(userId: number, page: number, count: number, db: any): Promise<any>
  /**
   * 创建一条说说
   * @param userid
   * @param content
   * @param images
   * @param db
   */
  createTalk(userid: number, content: string, images: File[], db: any): Promise<any>
  /**
   * 删除一条说说
   * @param talkId
   * @param db
   */
  deleteTalk(talkId: number, db: any): Promise<any>
  /**
   * 禁用/启用
   * @param talkId
   * @param db
   */
  disableTalk(talkId: number, db: any): Promise<any>
}
