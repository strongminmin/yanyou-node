import { Injectable } from 'kever'
import { CollegeInterface } from '../interface'
import { baseUrlToOOS } from '../utils'

@Injectable('college')
export default class CollegeService implements CollegeInterface {
  async getCollegeList(db: any): Promise<any> {
    try {
      const selectSentence = 'select college_id,college_name,college_local from college'
      const [rows] = await db.query(selectSentence)
      return rows
    }catch(err) {
      return false
    }
  }
  async getCollegeDetails(collegeId: number, db: any): Promise<any> {
    try {
      const selectSentence = 'select * from college where college_id = ?'
      const [rows] = await db.query(selectSentence, [collegeId])
      return rows[0]
    }catch(err) {
      return false
    }
  }
  async createCollege(collegeInfo: any, db: any): Promise<any> {
    try {
      const bannerUrl = await baseUrlToOOS('college', collegeInfo.baseUrl)
      const insertSentence = 'insert into college(college_name,college_local,college_graduate,college_intor,college_banner) values(?,?,?,?,?)'
      const [rows] = await db.query(insertSentence,[collegeInfo.name,collegeInfo.local,collegeInfo.graduateInfo,collegeInfo.intor,bannerUrl])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    }catch(err) {
      console.log(err)
      return false
    }
  }
  async updateCollege(collegeId: number, collegeInfo: any, db: any): Promise<any> {
    try {
      let bannerUrl
      if(collegeInfo.baseUrl.split(':')[0] === 'http') {
        bannerUrl = collegeInfo.baseUrl
      } else {
        bannerUrl = await baseUrlToOOS('advisory', collegeInfo.baseUrl)
      }
      const updateSentence = `update college set
      college_name = ?,
      college_local = ?,
      college_graduate = ?,
      college_intor = ?,
      college_banner = ? where college_id = ?
      `
      const [rows] = await db.query(updateSentence, [
        collegeInfo.name,
        collegeInfo.local,
        collegeInfo.graduateInfo,
        collegeInfo.intor,
        bannerUrl,
        collegeId
      ])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    }catch(err) {
      return false
    }
     
  }
  async deteleCollege(collegeId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from college where college_id = ?'
      const [rows] = await db.query(deleteSentence, [collegeId])
      if (rows.affectedRows > 0) {
        return true
      }
      return false
    }catch(err) {
      return false
    }
  }
}
