import { Controller, BaseController, Inject, Get, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/history')
export default class HistoryController extends BaseController {
  @Inject('history')
  public historyService
  @Get('/history-list')
  async getHistoryList(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId, page, count } = params
      const result = await this.historyService.getHistoryList(userId, page, count, this.ctx.db)
      if (!result) {
        throw new Error('请求失败')
      }
      resultData = createResultDate({
        message: '请求成功',
        data: result
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/clean-history')
  async cleanHistory(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId } = params
      const result = await this.historyService.cleanHistory(userId, this.ctx.db)
      if (!result) {
        throw new Error('清空失败')
      }
      resultData = createResultDate({
        message: '清空成功',
        data: result
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
}
