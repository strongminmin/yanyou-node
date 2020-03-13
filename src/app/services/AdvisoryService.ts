import { Injectable } from 'kever'
import { AdvisoryInterface } from '../interface'
import { baseUrlToOOS, uploadOss, beforeTime } from '../utils'

@Injectable('advisory')
export default class AdvisoryService implements AdvisoryInterface {
  async getAdvisoryList(page: number, count: number, db: any): Promise<any> {
    try {
      const selectSentence = `select * from advisory order by create_time desc limit ${(page - 1) * count},${count}`
      let [rows] = await db.query(selectSentence)
      const result = rows.map(item => {
        const time = beforeTime(item.create_time)
        return Object.assign(item, {
          create_time: time
        })
      })
      return result
    } catch (err) {
      return false
    }
  }

  async getAdvisoryDetails(advisoryId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from advisory where advisory_id = ?'
      const [rows] = await db.query(selectSentence, [advisoryId])
      let result = rows[0]
      result.create_time = beforeTime(result.create_time)
      this.updateInfo(result.advisory_id, 'advisory_access', db)
      return result
    } catch (err) {
      return false
    }
  }

  async createAdvisory(advisoryInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const bannerUrl = await baseUrlToOOS('advisory', advisoryInfo.bannerUrl)
      const insertSentence =
        'insert into advisory(advisory_tag,advisory_title,advisory_banner,advisory_content,advisory_source,create_time) values(?,?,?,?,?,?)'
      const [rows] = await db.query(insertSentence, [
        advisoryInfo.tag,
        advisoryInfo.title,
        bannerUrl,
        advisoryInfo.content,
        advisoryInfo.source,
        createTime
      ])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async updateAdvisory(advisoryId: number, advisoryInfo: any, db: any): Promise<any> {
    try {
      const createTime = Date.now()
      const bannerUrl = await baseUrlToOOS('advisory', advisoryInfo.bannerUrl)
      const updateSentence = ` update advisory set
      advisory_tag=?,
      advisory_title=?,
      advisory_banner=?,
      advisory_content=?,
      advisory_source=?,
      create_time=? where advisory_id = ?
      `
      const [rows] = await db.query(updateSentence, [
        advisoryInfo.tag,
        advisoryInfo.title,
        bannerUrl,
        advisoryInfo.content,
        advisoryInfo.source,
        createTime,
        advisoryId
      ])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async updateInfo(advisoryId: number, key: string, db: any): Promise<any> {
    try {
      const selectSentence = `select ${key} from advisory where advisory_id = ?`
      const updateSentence = `update advisory set ${key}=? where advisory_id = ?`
      const [slelectRows] = await db.query(selectSentence, [advisoryId])
      console.log(slelectRows)
      const value = +slelectRows[0][key] + 1
      const [rows] = await db.query(updateSentence, [value, advisoryId])
      if (rows.affectedRows > 0) {
        return value
      }
      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }
}
