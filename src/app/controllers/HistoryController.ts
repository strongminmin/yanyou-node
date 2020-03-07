import { Controller, BaseController, Inject, Get } from 'kever'

@Controller('/history')
export default class HistoryController extends BaseController {
  @Inject('history')
  public historyService
  @Get('/history-list')
  async getHistoryList() {}
  @Get('/delete-history')
  async deleteHistory() {}
}
