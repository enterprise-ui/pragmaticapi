import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUser } from './gen/create-user.dto'
import { User } from './gen/user.dto'
import { UserEntity } from './user.entity'
import { IUsersService } from './gen/user.service.interface'

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  create(createUser: CreateUser): Promise<User> {
    const user = new UserEntity()
    user.firstName = createUser.firstName
    user.lastName = createUser.lastName

    return this.usersRepository.save(user)
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
