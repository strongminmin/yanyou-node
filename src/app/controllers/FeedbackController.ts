import { Controller, BaseController, Inject, Get } from 'kever'
@Controller('/feedback')
export default class FeedbackController extends BaseController {
  @Inject('feedback')
  public feedbackService
  @Get('/feedback-list')
  async getFeedbackList() {}
  @Get('/update-feedback-status')
  async updateFeedbackStatus() {}
  @Get('/delete-feedback')
  async deleteFeedback() {}
  @Get('/create-feedback')
  async createFeedback() {}
}
