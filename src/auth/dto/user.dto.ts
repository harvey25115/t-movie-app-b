import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class UserDto {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  isVerified: boolean;
}
