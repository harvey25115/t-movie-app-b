import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const movie = await this.movieService.findById(+id);
    if (!movie) {
      throw new NotFoundException('Movie not found');
    } else {
      return movie;
    }
  }
}
