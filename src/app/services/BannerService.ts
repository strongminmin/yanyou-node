import { Injectable } from 'kever'
import { BannerInterface } from '../interface'

@Injectable('banner')
export default class BannerService implements BannerInterface {
  async getBannerList(db: any): Promise<any> {}
  async deleteBanner(bannerId: number, db: any): Promise<any> {}
  async createBanner(bannerFile: File, db: any): Promise<any> {}
}
