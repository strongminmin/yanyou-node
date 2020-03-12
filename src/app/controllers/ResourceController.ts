import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'
@Controller('/resource')
export default class ResourceController extends BaseController {
  @Inject('resource')
  public resourceService
  @Inject('history')
  public historyService

  @Get('/resource-list')
  async getResourceList(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId } = params
      const result = await this.resourceService.getResourceList(this.ctx.db)
      if (!result) {
        throw new Error('获取资源失败')
      }
      this.historyService.createHistory(userId, '浏览了资料', this.ctx.db)
      resultData = createResultDate({
        message: '获取资源成功',
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
  @Post('/release-resource')
  async releaseResource(@Params(['body']) params) {
    let resultData
    try {
      const { resource_type: type, resource_title: title, resource_url: url, resource_ident: ident } = params
      const result = await this.resourceService.createResource(
        {
          type,
          title,
          url,
          ident
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('发布资源失败')
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

  @Post('/update-resource')
  async updateResource(@Params(['body']) params) {
    let resultData
    try {
      const { resource_id: resourceId, resource_type: type, resource_title: title, resource_url: url, resource_ident: ident } = params
      const result = await this.resourceService.updateResource(
        resourceId,
        {
          type,
          title,
          url,
          ident
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('更新资源失败')
      }
      resultData = createResultDate({
        message: '更新成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/delete-resource')
  async deleteResource(@Params(['query']) params) {
    let resultData
    try {
      const { resource_id: resourceId } = params
      const result = await this.resourceService.deleteResource(resourceId, this.ctx.db)
      if (!result) {
        throw new Error('删除失败')
      }
      resultData = createResultDate({
        message: '删除成功'
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
