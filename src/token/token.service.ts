import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Token } from './token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
  ) {}

  /**
   * Find record by email and token
   * @param email
   * @param token
   * @returns Token
   */
  async findByEmailToken(
    email: string,
    token: string,
  ): Promise<Token | undefined> {
    return this.tokenRepository.findOneBy({ email, token });
  }

  /**
   * Find token by email
   * @param email
   * @returns Token
   */
  async findByEmail(email: string): Promise<Token | undefined> {
    return this.tokenRepository.findOneBy({ email });
  }

  /**
   * Find record by token
   * @param token
   * @returns Token
   */
  async findByToken(token: string): Promise<Token | undefined> {
    return this.tokenRepository.findOneBy({ token });
  }

  /**
   * Insert new token
   * @param token
   * @returns Token
   */
  async insert(token: Token): Promise<Token | undefined> {
    return this.tokenRepository.save(this.tokenRepository.create(token));
  }

  /**
   * Update token
   * @param token
   * @returns Token
   */
  async update(token: Token): Promise<Token | undefined> {
    return this.tokenRepository.save(token);
  }

  /**
   * Remove token
   * @param email
   * @returns DeleteResult
   */
  async delete(email: string): Promise<any> {
    return this.tokenRepository.delete({ email });
  }
}
