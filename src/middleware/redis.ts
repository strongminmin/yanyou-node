import { registerGlobalMiddle, BaseMiddle } from 'kever'
import * as redis from 'redis'
import * as bluebird from 'bluebird'
import { redis as redisConfig } from '../app/config'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
@registerGlobalMiddle('redis')
export default class Redis implements BaseMiddle {
  public client
  constructor() {
    const client = redis.createClient(redisConfig.RDS_PORT, redisConfig.RDS_HOST, redisConfig.RDS_OPTS)
    client.on('connect', err => {
      console.log('redis connected')
    })
    this.client = client
  }
  async ready(ctx, next) {
    ctx.redis = this.client
    await next()
  }
}
