import { Injectable } from 'kever'
import { CollegeInterface } from '../interface'

@Injectable('college')
export default class CollegeService implements CollegeInterface {
  async getCollegeBaseList(db: any): Promise<any> {}
  async getCollegeBaseDetails(collegeId: number, db: any): Promise<any> {}
  async getCollegeItemDetails(type: number, collegeId: number, db: any): Promise<any> {}
  async createCollegeBase(collegeInfo: Object, db: any): Promise<any> {}
  async createCollegeBaseItem(type: number, collegeId: Object, collegeItemInfo: any, db: any): Promise<any> {}
  async updateCollegeBase(collegeId: number, collegeInfo: Object, db: any): Promise<any> {}
  async updateCollegeItem(type: number, collegeId: number, collegeItemInfo: any, db: any): Promise<any> {}
  async deteleCollegeBase(collegeId: number, db: any): Promise<any> {}
  async deleteCollegeItem(type: number, collegeId: number, db: any): Promise<any> {}
}
