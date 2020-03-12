import { Injectable } from 'kever'
import { ResourceInterface } from '../interface'

@Injectable('resource')
export default class PlanService implements ResourceInterface {
  async getResourceList(db: any): Promise<any> {
    try {
      const selectSentence = 'select * from resource'
      const [rows] = await db.query(selectSentence)
      const result = rows.reduce((res, item) => {
        let type = item.resource_type
        if (!res[type]) {
          res[type] = []
        }
        res[type].push(item)
        return res
      }, {})
      return result
    } catch (err) {
      return false
    }
  }

  async createResource(resourceInfo: any, db: any): Promise<any> {
    try {
      const insertSentence = 'insert into resource(resource_type,resource_title,resource_url,resource_ident) value(?,?,?,?)'
      const [rows] = await db.query(insertSentence, [resourceInfo.type, resourceInfo.title, resourceInfo.url, resourceInfo.ident])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async updateResource(resourceId: number, resourceInfo: any, db: any): Promise<any> {
    try {
      const updateSentence = `update resource set
      resource_type=?,
      resource_title=?,
      resource_url=?,
      resource_ident= ? where resource_id = ?
      `
      const [rows] = await db.query(updateSentence, [
        resourceInfo.type,
        resourceInfo.title,
        resourceInfo.url,
        resourceInfo.ident,
        resourceId
      ])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  async deleteResource(resourceId: number, db: any): Promise<any> {
    try {
      const deleteSentence = 'delete from resource where resource_id = ?'
      const [rows] = await db.query(deleteSentence, [resourceId])
      if (rows.affectedRows == 1) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
