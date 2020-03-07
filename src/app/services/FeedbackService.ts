import { Injectable } from 'kever'
import { FeedbackInterface } from '../interface'

@Injectable('feedback')
export default class FeedbackService implements FeedbackInterface {
  async getFeedbackList(db: any): Promise<any> {}

  async updateFeedbackStatus(feedbackId: number, db: any): Promise<any> {}

  async deleteFeedback(feedbackId: number, db: any): Promise<any> {}

  async createFeedback(feedbackInfo: object, db: any): Promise<any> {}
}
