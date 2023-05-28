import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Movie } from '../movie/movie.entity';
import { MovieController } from '../movie/movie.controller';
import { MovieService } from '../movie/movie.service';

const stubData = [
  {
    id: 1,
    title: 'Avatar',
    plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    runtime: '162 min',
    actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    released: '18 Dec 2009',
    rating: '7.9',
    rated: 'PG-13',
    director: 'James Cameron',
    genre: 'Action, Adventure, Fantasy',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
  },
  {
    id: 2,
    title: 'I Am Legend',
    plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
    runtime: '101 min',
    actors:
      'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
    released: '14 Dec 2007',
    rating: '7.2',
    rated: 'PG-13',
    director: 'Francis Lawrence',
    genre: 'Drama, Horror, Sci-Fi',
    poster:
      'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
  },
];

describe('MovieController', () => {
  let movieController: MovieController;
  let movieService: MovieService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        MovieService,
        {
          provide: getRepositoryToken(Movie),
          useValue: {},
        },
      ],
    }).compile();

    movieService = moduleRef.get<MovieService>(MovieService);
    movieController = moduleRef.get<MovieController>(MovieController);
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      jest
        .spyOn(movieService, 'findAll')
        .mockImplementation(() => Promise.resolve(stubData));

      expect(await movieController.findAll()).toBe(stubData);
    });
  });

  describe('findOne', () => {
    it('should return 1 movie', async () => {
      const movieId = '1';
      jest
        .spyOn(movieService, 'findById')
        .mockImplementation(() => Promise.resolve(stubData[0]));

      expect(await movieController.findOne(movieId)).toBe(stubData[0]);
    });
    it('should throw error', async () => {
      const movieId = '1';
      jest
        .spyOn(movieService, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      await expect(movieController.findOne(movieId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
