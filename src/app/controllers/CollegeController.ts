import { Controller, BaseController, Inject, Get, Post } from 'kever'

@Controller('/college')
export default class CollegeController extends BaseController {
  @Inject('college')
  public collegeService
  @Get('/college-list')
  async getCollegeList() {}
  @Get('/college-item-details')
  async getCollegeItemDetails() {}
  @Get('/college-details')
  async getCollegeDetails() {}
  @Post('/create-college')
  async createCollege() {}
  @Post('/update-college')
  async updateCollege() {}
  @Get('/delete-college')
  async deleteCollege() {}
}
