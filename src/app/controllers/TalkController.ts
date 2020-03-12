import { Controller, BaseController, Inject, Get, Post, Params } from 'kever'
import { createResultDate } from '../utils'

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
  async getTalkList(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId, page, count } = params
      const talkList = this.talkService.getTalkList(page, count, this.ctx.db)
      const talksUserInfoPromise: Array<Promise<any>> = talkList.map(talk => {
        return this.userService.findUser('user_id', talk.user_id, this.ctx.db)
      })
      const talksUserLikePromise: Array<Promise<any>> = talkList.map(talk => {
        return this.likeService.getLike(0, userId, talk.talk_id, this.ctx.db)
      })
      const talksUserInfo = await Promise.all(talksUserInfoPromise)
      const talksUserLike = await Promise.all(talksUserLikePromise)
      const result = talkList.map((talk, idx) => {
        const userInfo = talksUserInfo[idx]
        const userLike = talksUserLike[idx]
        return Object.assign(talk, {
          user_name: userInfo.user_name,
          user_image: userInfo.user_image,
          like: userLike
        })
      })
      resultData = createResultDate({
        message: '获取心情列表成功',
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
  @Post('/release-talk')
  async releaseTalk(@Params(['body']) params) {
    let resultData
    try {
      const request = this.ctx.request as any
      let images = request.files['images[]']
      if (images === undefined) {
        images = []
      } else if (!Array.isArray(images)) {
        images = [images]
      }
      const { user_id: userid, content } = params
      const result = await this.talkService.createTalk(userid, content, images, this.ctx.db)
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
  @Get('/talk-like')
  async talkLike(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId, target_id: targetId } = params
      const result = await this.likeService.likeAction(0, userId, targetId, this.ctx.db)
      if (!result) {
        throw new Error('请求失败')
      }
      resultData = createResultDate({
        message: '请求成功',
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
  @Get('/talk-comment-list')
  async getTalkCommentList(@Params(['query']) params) {
    let resultData
    try {
      const { user_id: userId, target_id: targetId, page, count } = params
      const commentList = await this.commentService.getCommentList(page, count, targetId, this.ctx.db)
      const commentUserInfoPromise: Array<Promise<any>> = commentList.map(comment => {
        return this.userService.findUser('user_id', comment.user_id, this.ctx.db)
      })
      const commentUserLikePromise: Array<Promise<any>> = commentList.map(comment => {
        return this.likeService.getLike(1, userId, comment.comment_id, this.ctx.db)
      })
      const commentUserInfo = await Promise.all(commentUserInfoPromise)
      const commentUserLike = await Promise.all(commentUserLikePromise)
      const result = commentList.map((comment, idx) => {
        const userInfo = commentUserInfo[idx]
        const userLike = commentUserLike[idx]
        return Object.assign(comment, {
          user_name: userInfo.user_name,
          user_image: userInfo.user_image,
          like: userLike
        })
      })
      resultData = createResultDate({
        message: '获取评论列表成功',
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
  @Post('/release-comment')
  async releaseComment(@Params(['body']) params) {
    let resultData
    try {
      const { user_id: userId, target_id: targetId, comment_content: commentContent } = params
      const result = await this.commentService.createComment(
        {
          userId,
          targetId,
          commentContent
        },
        this.ctx.db
      )
      if (!result) {
        throw new Error('评论失败')
      }
      resultData = createResultDate({
        message: '评论成功'
      })
    } catch (err) {
      resultData = createResultDate({
        noerr: 1,
        message: err.message
      })
    }
    this.ctx.body = resultData
  }
  @Get('/delete-talk')
  async deleteTalk(@Params(['query']) params) {
    let resultData
    try {
      const { talk_id: talkId } = params
      const talkResultPromise = this.talkService.deleteTalk(talkId, this.ctx.db)
      const commentListPromise = this.commentService.deleteComment(talkId, this.ctx.db)
      const liketalkResultPromise = this.likeService.deleteLike(0, talkId, this.ctx.db)
      // 先删话题、话题的评论、话题的点赞
      const [talkResult, commentList, liketalkResult] = await Promise.all([talkResultPromise, commentListPromise, liketalkResultPromise])
      // 再删评论的点赞
      const likeCommentResultPromise = commentList.map(commentId => {
        return this.likeService.deleteLike(1, commentId, this.ctx.db)
      })
      await Promise.all(likeCommentResultPromise)
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
  @Get('/disable-talk')
  async disableTalk(@Params(['query']) params) {
    let resultData
    try {
      const { talk_id: talkId } = params
      const result = this.talkService.disableTalk(talkId, this.ctx.db)
      if (!result) {
        throw new Error('禁用失败')
      }
      resultData = createResultDate({
        message: '禁用成功'
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
