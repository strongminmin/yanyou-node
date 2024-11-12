import { Controller, BaseController, Inject, Get } from 'kever'

@Controller('/message')
export default class MessageController extends BaseController {
  @Inject('message')
  public messageService
  @Get('/message-list')
  async getMessageList() {}
}
