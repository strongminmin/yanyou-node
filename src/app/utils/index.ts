import * as OSS from 'ali-oss'
import { createWriteStream, createReadStream, writeFileSync, readFileSync } from 'fs'
import { ResultData } from '../interface'

const client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: 'kimvoice',
  timeout: 6000000
})
/**
 * 生成验证码
 * @param num
 */
export const createIdentity = (num: number): string => {
  const idenList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let identity = ''
  for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * idenList.length)
    identity += idenList[random]
  }

  return identity
}

/**
 * 图片base64转file
 * @param dataurl
 * @param filename
 */
export const baseUrlToOOS = async (dir: string, dataurl) => {
  var base64Data = dataurl.replace(/^data:image\/\w+;base64,/, '')
  const imageBuffer = Buffer.from(base64Data, 'base64')
  const now = Date.now()
  const res = await client.put(`yanyou/${dir}/${now}.jpg`, imageBuffer)
  return res.url
}

/**
 * 调阿里云oss
 */
export const uploadOss = async (dir: string, files: Array<File>) => {
  const filesPath: Array<string> = []
  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i] as any;
      const result = await client.put(`yanyou/${dir}/${file.name}`, file.path)
      filesPath.push(result.url)
    }
    return filesPath
  } catch (err) {
    console.log('err:', err)
  }
}

export const beforeTime = (time: number) => {
  if (Number.isNaN(+time)) return time
  const now = new Date().getTime()
  let diff = Math.floor((now - time) / 1000)

  if (diff < 60) {
    return `${diff}秒前`
  }
  diff = Math.floor(diff / 60)
  // console.log(diff)
  if (diff < 60) {
    return `${diff}分钟前`
  }
  diff = Math.floor(diff / 60)
  if (diff < 24) {
    return `${diff}小时前`
  }
  return new Date(+time).toLocaleDateString()
}

export const upload = async (file: any) => {
  const reader = await createReadStream(file.path)
  const ext = file.name.split('.').pop()
  const path = `/${Date.now()}.${ext}`
  const upStream = await createWriteStream(`upload${path}`)
  await reader.pipe(upStream)
  return `118.89.217.151/voice${path}`
}

const resultData: ResultData = {
  noerr: 0,
  message: '',
  data: null
}
interface IData {
  noerr?: number
  message: string
  data?: {} | null
}
export const createResultDate = (data: IData): ResultData => Object.assign({}, resultData, data)
