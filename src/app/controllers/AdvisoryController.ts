import { Controller, BaseController, Inject, Get, Post } from 'kever'

@Controller('/advisory')
export default class AdvisoryController extends BaseController {
  @Inject('advisory')
  public advisoryService
  @Get('/advisory-list')
  async getAdvisoryList() {}
  @Get('/advisory-details')
  async getAdvisoryDetails() {}
  @Post('/create-advisory')
  async releaseAdvisory() {}
  @Post('/update-advisory')
  async upateAdvisory() {}
  @Get('/advisory-access')
  async addAdvisoryAccess() {}
  @Get('/advisory-reward')
  async addAdvisoryReward() {}
}
