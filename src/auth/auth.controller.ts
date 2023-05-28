import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Param,
  Put,
  HttpCode,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDto } from '../auth/dto/user.dto';
import { TokenDto } from '../auth/dto/token.dto';

import { LocalAuthGuard } from './passport-strategy/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@Req() req) {
    return this.authService.signIn(req.user);
  }

  @Post('signup')
  signUp(@Body() signUpDto: UserDto) {
    return this.authService.signUp(signUpDto);
  }

  @Get('verify/:token')
  verifyEmail(@Param('token') token: string) {
    return this.authService.verifyEmail(token);
  }

  @Get('forgot-password/:email')
  forgotPassword(@Param() tokenDto: TokenDto) {
    const { email } = tokenDto;
    return this.authService.forgotPassword(email);
  }

  @Put('reset-password/:token')
  resetPassword(@Param('token') token: string, @Body() resetUserDto: UserDto) {
    return this.authService.resetPassword(resetUserDto, token);
  }
}
