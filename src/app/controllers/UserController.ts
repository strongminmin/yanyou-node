import { Controller, BaseController, Get, Inject, Post, Params } from 'kever'
import { createResultDate } from '../utils'

@Controller('/user')
export default class UserController extends BaseController {
  @Inject('user')
  public userService
  @Inject('history')
  public historyService

  @Get('/login')
  async login(@Params(['query']) params) {
    let resultData
    try {
      const { user_email: email, user_password: password } = params
      const result = await this.userService.login(email, password, this.ctx.db)
      if (result === undefined) {
        throw new Error('您输入的邮箱未注册')
      }
      if (!result) {
        throw new Error('登录失败')
      }
      if (result.user_status == 1) {
        throw new Error('该用户被禁用，请联系管理员处理相关信息。')
      }
      resultData = createResultDate({
        message: '登录成功',
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
  @Post('/register')
  async register(@Params(['body']) params) {
    let resultData
    try {
      const { user_email: email, user_name: username, user_password: password } = params
      const result = await this.userService.createUser(email, username, password, this.ctx.db)
      if (!result) {
        throw new Error('注册失败')
      }
      resultData = createResultDate({
        message: '注册成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Post('/update')
  async updateInfo(@Params(['body']) params) {
    let resultData
    try {
      let { user_id: userId, key, value } = params
      if (key === 'user_image') {
        const request = this.ctx.request as any;
        value = request.files['value'];
      }
      const result = await this.userService.updateUser(userId, key, value, this.ctx.db)
      if (!result) {
        throw new Error('更新失败')
      }
      this.historyService.createHistory(userId, '修改了基本信息', this.ctx.db)
      resultData = createResultDate({
        message: '更新成功',
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
