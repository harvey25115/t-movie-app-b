import { IsNotEmpty, IsEmail } from 'class-validator';

export class TokenDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
