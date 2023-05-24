import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { LocalStrategy } from './passport-strategy/local.strategy';
import { JwtStrategy } from './passport-strategy/jwt.strategy';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TokenModule } from 'src/token/token.module';
import { MailModule } from 'src/mail/mail.module';

import config from 'src/config';

@Module({
  imports: [
    UserModule,
    TokenModule,
    PassportModule,
    MailModule,
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: { expiresIn: config.jwt.expiresIn },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
