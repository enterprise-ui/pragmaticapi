import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UsersController } from './gen/users.controller'
import { UsersService } from './users.service'
import { usersServiceName } from './gen/user.service.interface'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [{
    provide: usersServiceName,
    useClass: UsersService
  }],
  controllers: [UsersController],
})
export class UsersModule {}
