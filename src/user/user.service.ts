import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Find user by email
   * @param email
   * @returns User
   */
  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  /**
   * Insert new user
   * @param user
   * @returns User
   */
  async insert(user: User): Promise<User | undefined> {
    return this.userRepository.save(this.userRepository.create(user));
  }

  /**
   * Update user
   * @param user
   * @returns User
   */
  async update(user: User): Promise<User | undefined> {
    return this.userRepository.save(user);
  }
}
