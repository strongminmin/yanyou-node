import { Controller, BaseController, Get, Inject, Post } from 'kever'

@Controller('/user')
export default class UserController extends BaseController {
  @Inject('user')
  public userService

  @Get('/login')
  async login() {}
  @Post('/register')
  async register() {}
  @Post('/update')
  async updateInfo() {}
  @Get('/delete')
  async deleteUser() {}
}
