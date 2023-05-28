import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/passport-strategy/jwt-auth.guard';

import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './create-favorite.dto';

@UseGuards(JwtAuthGuard)
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  async create(@Body() createFavDto: CreateFavoriteDto, @Req() req) {
    const { movieId } = createFavDto;
    const { id: userId } = req.user;
    const favorite = await this.favoriteService.create(movieId, userId);
    if (!favorite) {
      throw new NotFoundException(
        'User or movie not found. Cannot create favorite.',
      );
    } else {
      return 'Favorite was added successfully.';
    }
  }

  @Get()
  findAll(@Req() req) {
    const { id: userId } = req.user;
    return this.favoriteService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    const { id: userId } = req.user;
    const favorite = await this.favoriteService.findById(+id, userId);
    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    } else {
      return favorite;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const { id: userId } = req.user;
    const { affected } = await this.favoriteService.delete(+id, userId);
    if (!affected) {
      throw new NotFoundException('Favorite not found');
    } else {
      return 'Favorite was deleted successfully.';
    }
  }
}
