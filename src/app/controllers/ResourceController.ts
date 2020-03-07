import { Controller, BaseController, Inject, Get, Post } from 'kever'
@Controller('/resource')
export default class ResourceController extends BaseController {
  @Inject('resource')
  public resourceService
  @Get('/resource-list')
  async getResourceList() {}
  @Post('/create-resource')
  async createResource() {}
  @Post('/update-resource')
  async updateResource() {}
  @Get('/delete-resource')
  async deleteResource() {}
}
