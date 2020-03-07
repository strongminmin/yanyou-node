import { Controller, BaseController, Inject, Get, Post } from 'kever'

@Controller('/meet')
export default class MeetController extends BaseController {
  @Inject('meet')
  public meetService

  @Get('/meet-list')
  async getMeetList() {}
  @Get('/meet-details')
  async getMeetDetails() {}
  @Post('/creat-meet')
  async createMeet() {}
  @Post('/update-meet')
  async updateMeet() {}
  @Get('/delete-meet')
  async deleteMeet() {}
}
