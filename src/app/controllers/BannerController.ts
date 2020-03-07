import { Controller, BaseController, Inject, Get, Post } from 'kever'

@Controller('/banner')
export default class BannerController extends BaseController {
  @Inject('banner')
  public bannerService

  @Get('/banner-list')
  async getBannerList() {}
  @Get('/delete-banner')
  async deleteBanner() {}
  @Post('/create-banner')
  async createBanner() {}
}
