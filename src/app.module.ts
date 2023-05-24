import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { FavoriteModule } from './favorite/favorite.module';
import { AuthModule } from './auth/auth.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: config.mail.host,
        port: config.mail.port,
        auth: {
          user: config.mail.user,
          pass: config.mail.pass,
        },
      },
    }),
    MovieModule,
    FavoriteModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
