import { Controller, BaseController, Inject, Get, Post } from 'kever'

@Controller('/talk')
export default class TalkController extends BaseController {
  @Inject('talk')
  public talkService
  @Inject('user')
  public userService
  @Inject('like')
  public likeService
  @Inject('comment')
  public commentService

  @Get('/talk-list')
  async getTalkList() {}
  @Post('/craete-talk')
  async createTalk() {}
  @Get('/talk-like')
  async talkLike() {}
  @Get('/talk-comment-list')
  async getTalkCommentList() {}
  @Get('/create-comment')
  async createComment() {}
  @Get('/delete-talk')
  async deleteTalk() {}
}
