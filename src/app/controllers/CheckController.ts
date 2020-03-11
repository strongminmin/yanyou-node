import { Controller, BaseController, Inject, Get, Params } from 'kever'
import { ResultData } from '../interface'

@Controller('/check')
export default class CheckController extends BaseController {
  @Inject('check')
  public checkService
  public data: ResultData = {
    noerr: 0,
    message: '',
    data: null
  }
  @Get('/check-in')
  async checkIn(@Params(['query']) params) {
    let resultData: ResultData
    try {
      const { user_id: userId } = params
      const result = await this.checkService.checkIn(userId, this.ctx.db)
      if (!result) {
        throw new Error('打卡失败')
      }
      resultData = Object.assign({}, this.data, {
        message: '打卡成功',
        data: result
      })
    } catch (err) {
      resultData = Object.assign({}, this.data, {
        noerr: 1,
        message: '打卡失败'
      })
    }
    this.ctx.body = resultData
  }
  @Get('/check-list')
  async getCheckList(@Params(['query']) params) {
    let resultData: ResultData
    try {
      const { user_id: userId } = params
      const result = await this.checkService.getCheckList(userId, this.ctx.db)
      if (!result) {
        throw new Error('获取打卡记录失败')
      }
      resultData = Object.assign({}, this.data, {
        message: '获取打卡记录成功',
        data: result
      })
    } catch (err) {
      resultData = Object.assign({}, this.data, {
        noerr: 1,
        message: '获取打卡记录失败'
      })
    }
    this.ctx.body = resultData
  }
}
