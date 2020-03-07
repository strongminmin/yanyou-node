import { Injectable } from 'kever'
import { ResourceInterface } from '../interface'

@Injectable('resource')
export default class PlanService implements ResourceInterface {
  async getResourceList(db: any): Promise<any> {}

  async createResource(resourceInfo: object, db: any): Promise<any> {}

  async updateResource(resourceId: number, resourceInfo: object, db: any): Promise<any> {}

  async deleteResource(resourceId: number): Promise<any> {}
}
