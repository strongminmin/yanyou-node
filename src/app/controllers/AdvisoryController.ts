import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/advisory')
export default class AdvisoryController extends BaseController {
  @Inject('advisory')
  public advisoryService
  @Inject('history')
  public historyService
  @Get('/advisory-list')
  async getAdvisoryList(@Params(['query']) params) {
    let resultData
    try {
      const { page, count } = params
      const result = await this.advisoryService.getAdvisoryList(page, count, this.ctx.db)
      if (!result) {
        throw new Error('热点列表获取失败')
      }
      resultData = createResultDate({
        message: '热点获取列表获取成功',
        data: result
      })
    } catch (err) {
      resultData = createResultDate({
        message: err.message,
        noerr: 1
      })
    }
    this.ctx.body = resultData
  }

  @Get('/advisory-details')
  async getAdvisoryDetails(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId, advisory_id: advisoryId } = params
      const result = await this.advisoryService.getAdvisoryDetails(advisoryId, this.ctx.db)
      if (!result) {
        throw new Error('获取热点详情失败')
      }
      this.historyService.createHistory(userId, `浏览了热点：《${result.advisory_title}》的内容`, this.ctx.db)
      resultData = createResultDate({
        message: '获取热点详情成功',
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

  @Post('/release-advisory')
  async releaseAdvisory(@Params(['body']) params) {
    let resultData
    try {
      const {
        advisory_tag: tag,
        advisory_title: title,
        advisory_banner: bannerUrl,
        advisory_content: content,
        advisory_source: source
      } = params
      const result = await this.advisoryService.createAdvisory(
        {
          tag,
          title,
          bannerUrl,
          content,
          source
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('发布失败')
      }
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

  @Post('/update-advisory')
  async upateAdvisory(@Params(['body']) params) {
    let resultData
    try {
      const {
        advisory_tag: tag,
        advisory_title: title,
        advisory_banner: bannerUrl,
        advisory_content: content,
        advisory_source: source,
        advisory_id: advisoryId
      } = params
      const result = await this.advisoryService.updateAdvisory(
        advisoryId,
        {
          tag,
          title,
          bannerUrl,
          content,
          source
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('更新热点信息失败')
      }
      resultData = createResultDate({
        message: '更新热点信息成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/advisory-reward')
  async addAdvisoryReward(@Params(['query']) params) {
    let resultData
    try {
      const { advisory_id: advisoryId, } = params
      const result = await this.advisoryService.updateInfo(advisoryId, 'advisory_reward', this.ctx.db)
      if (!result) {
        throw new Error('打赏次数失败')
      }
      resultData = createResultDate({
        message: '打赏次数成功',
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
