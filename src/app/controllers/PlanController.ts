import { Controller, BaseController, Inject, Get, Post } from 'kever'
@Controller('/plan')
export default class PlanController extends BaseController {
  @Inject('plan')
  public planService
  @Get('/plan-list')
  async getPlanList() {}
  @Post('/create-plan')
  async createPlan() {}
  @Post('/update-plan')
  async updatePlan() {}
  @Get('/delete-plan')
  async deletePlan() {}
}
