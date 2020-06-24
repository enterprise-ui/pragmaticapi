import { ApiProperty } from '@nestjs/swagger'

export class CreateUser {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  firstName: string
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  lastName: string
}
