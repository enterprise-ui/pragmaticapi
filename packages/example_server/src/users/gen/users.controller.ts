import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Inject } from '@nestjs/common'

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse
} from '@nestjs/swagger'

import { CreateUser } from './create-user.dto'
import { User } from './user.dto'
import { IUsersService, usersServiceName } from './user.service.interface'

@ApiTags('cats')
@Controller('users')
export class UsersController {
  constructor(@Inject(usersServiceName) private usersService: IUsersService) {}

  @ApiOperation({ summary: 'Create cat' })
  // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  @Post()
  create(@Body() createUser: CreateUser): Promise<User> {
    return this.usersService.create(createUser)
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id)
  }
}
