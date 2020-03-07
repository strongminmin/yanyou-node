import { Controller, BaseController, Inject, Get } from 'kever'

@Controller('/check')
export default class CheckController extends BaseController {
  @Inject('check')
  public checkService
  @Get('/check-in')
  async checkIn() {}
  @Get('/check-count')
  async getCheckNum() {}
}
