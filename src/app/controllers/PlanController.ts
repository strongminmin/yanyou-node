import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'
@Controller('/plan')
export default class PlanController extends BaseController {
  @Inject('plan')
  public planService
  @Inject('history')
  public historyService

  @Get('/plan-list')
  async getPlanList(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId } = params
      const result = await this.planService.getPlanList(userId, this.ctx.db)
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
  @Post('/release-plan')
  async releasePlan(@Params(['body']) params) {
    let resultData
    try {
      const { user_id: userId, plan_month: planMonth, plan_content: planContent } = params
      const result = await this.planService.createPlan(
        userId,
        {
          month: planMonth,
          content: planContent
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('发布失败')
      }
      this.historyService.createHistory(userId, `添加了${planMonth}月计划`, this.ctx.db)
      resultData = createResultDate({
        message: '发布成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/delete-plan')
  async deletePlan(@Params(['query']) params) {
    let resultData
    try {
      const { plan_id: planId } = params
      const result = await this.planService.deletePlan(planId, this.ctx.db)
      if (!result) {
        throw new Error('删除失败')
      }
      resultData = createResultDate({
        message: '删除成功',
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
