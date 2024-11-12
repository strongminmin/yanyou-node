import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/banner')
export default class BannerController extends BaseController {
  @Inject('banner')
  public bannerService

  @Get('/banner-list')
  async getBannerList() {
    let resultData
    try {
      const result = await this.bannerService.getBannerList(this.ctx.db)
      if (!result) {
        throw new Error('获取轮播图列表失败')
      }
      resultData = createResultDate({
        message: '获取轮播图列表成功',
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
  @Get('/delete-banner')
  async deleteBanner(@Params(['query']) params) {
    let resultData
    try {
      const { banner_id: bannerId } = params
      const result = await this.bannerService.deleteBanner(bannerId, this.ctx.db)
      if (!result) {
        throw new Error('删除轮播图失败')
      }
      resultData = createResultDate({
        message: '删除轮播图成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Post('/upload-banner')
  async uploadBanner(@Params(['body']) params) {
    let resultData
    try {
      const { banner_image: bannerImage } = params
      const result = await this.bannerService.createBanner(bannerImage, this.ctx.db)
      if (!result) {
        throw new Error('上传失败')
      }
      resultData = createResultDate({
        message: '上传成功'
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
