import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UsersController } from './users.controller'
import { UsersService } from './users.service.gen'
import { usersServiceName } from './user.service.interface'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [{
    provide: usersServiceName,
    useClass: UsersService
  }],
  controllers: [UsersController],
})
export class UsersModule {}
