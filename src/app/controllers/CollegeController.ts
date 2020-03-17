import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/college')
export default class CollegeController extends BaseController {
  @Inject('college')
  public collegeService
  @Get('/college-list')
  async getCollegeList() {
    let resultData
    try {
      const result = await this.collegeService.getCollegeList(this.ctx.db)
      if(!result) {
        throw new Error('获取失败')
      }
      resultData = createResultDate({
        message: '获取成功',
        data: result
      })
    }catch(err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/college-details')
  async getCollegeDetails(@Params(['query']) params) {
    let resultData
    try {
      const {college_id:collegeId} = params
      const result = await this.collegeService.getCollegeDetails(collegeId, this.ctx.db)
      if(!result) {
        throw new Error('获取失败')
      }
      resultData = createResultDate({
        message: '获取成功',
        data: result
      })
    }catch(err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Post('/release-college')
  async releaseCollege(@Params(['body']) params) {
    let resultData
    try {
      const {name, local, baseUrl, intor, graduateInfo} = params
      const result = await this.collegeService.createCollege({
        name,
        local,
        baseUrl,
        intor,
        graduateInfo
      },this.ctx.db)
      if(!result) {
        throw new Error('发布失败')
      }
      resultData = createResultDate({
        message: '发布成功'
      }) 
    }catch(err){
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Post('/update-college')
  async updateCollege(@Params(['body']) params) {
    let resultData
    try {
      const {college_id: collegeId,name, local, baseUrl, intor, graduateInfo} = params
      const result = await this.collegeService.updateCollege(collegeId,{
        name,
        local,
        baseUrl,
        intor,
        graduateInfo
      },this.ctx.db)
      if(!result) {
        throw new Error('更新失败')
      }
      resultData = createResultDate({
        message: '更新成功'
      }) 
    }catch(err){
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/delete-college')
  async deleteCollege(@Params(['query']) params) {
    let resultData
    try {
      const {college_id:collegeId} = params
      const result = this.collegeService.deteleCollege(collegeId,this.ctx.db)
      if(!result) {
        throw new Error('删除失败')
      }
      resultData = createResultDate({
        message: '删除成功'
      })
    }catch(err){
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
}
