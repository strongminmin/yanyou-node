import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/meet')
export default class MeetController extends BaseController {
  @Inject('meet')
  public meetService

  @Get('/meet-list')
  async getMeetList() {
    let resultData
    try {
      const result = await this.meetService.getMeetList(this.ctx.db)
      if (!result) {
        throw new Error('获取校研会列表失败')
      }
      resultData = createResultDate({
        message: '获取校研会列表成功',
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
  @Get('/meet-details')
  async getMeetDetails(@Params(['query']) params) {
    let resultData
    try {
      const { meet_id: meetId } = params
      const result = await this.meetService.getMeetDetails(meetId, this.ctx.db)
      if (!result) {
        throw new Error('获取会议详情失败')
      }
      resultData = createResultDate({
        message: '获取会议详情成功',
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
  @Post('/release-meet')
  async releaseMeet(@Params(['body']) params) {
    let resultData
    try {
      const { meet_title: title, meet_content: content } = params
      const result = await this.meetService.createMeetDetails(
        {
          title,
          content
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
  @Post('/update-meet')
  async updateMeet(@Params(['body']) params) {
    let resultData
    try {
      const { meet_id: meetId, meet_title: title, meet_content: content } = params
      const result = await this.meetService.updateMeetDetails(
        meetId,
        {
          title,
          content
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('更新失败')
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
  @Get('/delete-meet')
  async deleteMeet(@Params(['query']) params) {
    let resultData
    try {
      let { meet_id: meetId } = params
      const result = await this.meetService.deleteMeet(meetId, this.ctx.db)
      if (!result) {
        throw new Error('删除失败')
      }
      resultData = createResultDate({
        noerr: 1,
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
