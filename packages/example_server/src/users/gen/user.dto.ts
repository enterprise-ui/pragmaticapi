import { IsInt, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class User {
  id: number;

  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  @IsString()
  firstName: string;

  lastName: string;
  isActive: boolean;
}
