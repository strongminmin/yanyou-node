import { Controller, BaseController, Inject, Get, Post } from 'kever'
@Controller('/plan')
export default class PlanController extends BaseController {
  @Inject('plan')
  public planService
  @Get('/plan-list')
  async getPlanList() {}
  @Post('/creat-plan')
  async createPlan() {}
  @Get('/delete-plan')
  async deletePlan() {}
}
