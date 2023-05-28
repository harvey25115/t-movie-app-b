import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Favorite } from './favorite.entity';
import { Movie } from '../movie/movie.entity';
import { User } from '../user/user.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Find all favorite using user id
   * @param userId
   * @returns Favorite[]
   */
  findAll(userId: number): Promise<Favorite[] | undefined> {
    return this.favoriteRepository.find({
      where: { user: { id: userId } },
      relations: { movie: true },
    });
  }

  /**
   * Find one favorite by id and user id
   * @param id
   * @param userId
   * @returns Favorite
   */
  findById(id: number, userId: number): Promise<Favorite | undefined> {
    return this.favoriteRepository.findOne({
      where: { id, user: { id: userId } },
      relations: { movie: true },
    });
  }

  /**
   * Insert new favorite
   * @param movieId
   * @param userId
   * @returns Favorite
   */
  async create(movieId: number, userId: number): Promise<Favorite | undefined> {
    // get movie details
    const movie = await this.movieRepository.findOneBy({ id: movieId });
    if (!movie) return null;
    // get user details
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) return null;
    // create favorite object
    const favorite = this.favoriteRepository.create();
    favorite.movie = movie;
    favorite.user = user;
    // save
    return this.favoriteRepository.save(favorite);
  }

  /**
   * Remove favorite
   * @param id
   * @param userId
   * @returns DeleteResult
   */
  delete(id: number, userId: number): Promise<any> {
    return this.favoriteRepository.delete({ id, user: { id: userId } });
  }
}
