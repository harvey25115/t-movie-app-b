import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { LocalStrategy } from './passport-strategy/local.strategy';
import { JwtStrategy } from './passport-strategy/jwt.strategy';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TokenModule } from '../token/token.module';
import { MailModule } from '../mail/mail.module';

import { configuration } from '../config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    TokenModule,
    PassportModule,
    MailModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: configuration().jwt.secret,
        signOptions: { expiresIn: configuration().jwt.expiresIn },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
