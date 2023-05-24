import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  plot: string;

  @Column()
  runtime: string;

  @Column()
  actors: string;

  @Column()
  released: string;

  @Column()
  rating: string;

  @Column()
  rated: string;

  @Column()
  director: string;

  @Column()
  genre: string;

  @Column()
  poster: string;
}
