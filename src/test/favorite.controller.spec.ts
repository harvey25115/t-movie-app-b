import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { FavoriteController } from '../favorite/favorite.controller';
import { Favorite } from '../favorite/favorite.entity';
import { FavoriteService } from '../favorite/favorite.service';
import { Movie } from '../movie/movie.entity';
import { User } from '../user/user.entity';

const stubData = [
  {
    id: 1,
    createdDate: new Date('2023-05-28T04:00:32.950Z'),
    updatedDate: new Date('2023-05-28T04:00:32.950Z'),
    movie: {
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
    user: null,
  },
  {
    id: 2,
    createdDate: new Date('2023-05-28T04:00:32.950Z'),
    updatedDate: new Date('2023-05-28T04:00:32.950Z'),
    movie: {
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
    user: null,
  },
];

const request = {
  user: { id: 1 },
};

describe('FavoriteController', () => {
  let favoriteController: FavoriteController;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FavoriteController],
      providers: [
        FavoriteService,
        {
          provide: getRepositoryToken(Favorite),
          useValue: {},
        },
        {
          provide: getRepositoryToken(Movie),
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    favoriteService = moduleRef.get<FavoriteService>(FavoriteService);
    favoriteController = moduleRef.get<FavoriteController>(FavoriteController);
  });

  describe('findAll', () => {
    it('should return an array of favorites', async () => {
      jest
        .spyOn(favoriteService, 'findAll')
        .mockImplementation(() => Promise.resolve(stubData));

      expect(await favoriteController.findAll(request)).toBe(stubData);
    });
  });

  describe('findOne', () => {
    it('should return 1 favorite', async () => {
      const favoriteId = '1';
      jest
        .spyOn(favoriteService, 'findById')
        .mockImplementation(() => Promise.resolve(stubData[0]));

      expect(await favoriteController.findOne(favoriteId, request)).toBe(
        stubData[0],
      );
    });
    it('should throw error', async () => {
      const favoriteId = '1';
      jest
        .spyOn(favoriteService, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      await expect(
        favoriteController.findOne(favoriteId, request),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should return success message', async () => {
      jest
        .spyOn(favoriteService, 'create')
        .mockImplementation(() => Promise.resolve(stubData[0]));

      expect(await favoriteController.create({ movieId: 1 }, request)).toBe(
        'Favorite was added successfully.',
      );
    });
    it('should throw error', async () => {
      jest
        .spyOn(favoriteService, 'create')
        .mockImplementation(() => Promise.resolve(null));

      await expect(
        favoriteController.create({ movieId: 1 }, request),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should return success message', async () => {
      jest
        .spyOn(favoriteService, 'delete')
        .mockImplementation(() => Promise.resolve({ affected: stubData[0] }));

      expect(await favoriteController.remove('1', request)).toBe(
        'Favorite was deleted successfully.',
      );
    });
    it('should throw error', async () => {
      jest
        .spyOn(favoriteService, 'delete')
        .mockImplementation(() => Promise.resolve({ affected: null }));

      await expect(favoriteController.remove('1', request)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
