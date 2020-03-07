import { Injectable } from 'kever'
import { UserInterface } from '../interface'

@Injectable('user')
export default class UserService implements UserInterface {
  async login(username: string, password: string, db: any): Promise<any> {}
  async createUser(email: string, username: string, password: string, db: any): Promise<any> {}
  async findUser(key: string, value: string, db: any): Promise<any> {}
  async updateUser(userId: number, key: string, value: string, db: any): Promise<any> {}
  async deleteUser(userId: number, db: any): Promise<any> {}
}
