import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  /**
   * Get all the movies
   * @returns Movie[]
   */
  findAll(): Promise<Movie[] | undefined> {
    return this.movieRepository.find();
  }

  /**
   * Get one movie by id
   * @param id
   * @returns Movie
   */
  findById(id: number): Promise<Movie | undefined> {
    return this.movieRepository.findOneBy({ id });
  }
}
