import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';

import { Movie } from '../movie/movie.entity';
import { User } from '../user/user.entity';

@Entity()
@Unique(['movie', 'user'])
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
