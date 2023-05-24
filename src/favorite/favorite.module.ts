import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteController } from './favorite.controller';
import { FavoriteService } from './favorite.service';
import { Favorite } from './favorite.entity';
import { MovieModule } from 'src/movie/movie.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [MovieModule, UserModule, TypeOrmModule.forFeature([Favorite])],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule {}
