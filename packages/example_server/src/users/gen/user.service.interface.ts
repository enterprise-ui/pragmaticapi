import { CreateUser } from './create-user.dto'
import { User } from './user.dto'

export const usersServiceName = 'UsersService'

export interface IUsersService {
  create(createUser: CreateUser): Promise<User>
  findAll(): Promise<User[]>
  findOne(id: string): Promise<User>
  remove(id: string): Promise<void>
}
