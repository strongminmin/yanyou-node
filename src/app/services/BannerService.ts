import { Injectable } from 'kever'
import { BannerInterface } from '../interface'
import { baseUrlToOOS } from '../utils'

@Injectable('banner')
export default class BannerService implements BannerInterface {
  async getBannerList(db: any): Promise<any> {
    try {
      const selectSentence = 'select * from banner'
      const [rows] = await db.query(selectSentence)
      return rows
    } catch (err) {
      return false
    }
  }
  async deleteBanner(bannerId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from banner where banner_id = ?'
      const [rows] = await db.query(deleteSentence, [bannerId])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
  async createBanner(bannerImage: string, db: any): Promise<any> {
    try {
      const bannerUrl = await baseUrlToOOS('banner', bannerImage)
      const insertSentence = 'insert into banner(banner_url) values(?)'
      const [rows] = await db.query(insertSentence, [bannerUrl])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
