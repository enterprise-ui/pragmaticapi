import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as db from './config/db'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    UsersModule,
  ],
})
export class AppModule {}