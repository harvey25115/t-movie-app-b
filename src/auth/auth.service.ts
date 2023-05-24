import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { TokenService } from 'src/token/token.service';
import { MailService } from 'src/mail/mail.service';

import { User } from 'src/user/user.entity';
import { Token } from 'src/token/token.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  /**
   * Validate user
   * @param email
   * @param password
   * @returns user without password
   */
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    // user cannot be found
    if (!user) throw new UnauthorizedException('Email not registered.');
    // user is not yet verified
    if (!user.isVerified)
      throw new UnauthorizedException('Email not verified.');
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    // password does not match
    if (!isPasswordMatch) {
      throw new UnauthorizedException();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
  }

  /**
   * Login user
   * @param user
   * @returns access_token
   */
  async signIn(user: User) {
    const payload = getPayload(user);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * Register user and send an email for verification
   * @param user
   * @returns String
   */
  async signUp(user: User): Promise<any> {
    // hash password
    user.password = await generateHashPassword(user.password);
    // insert user
    await this.userService.insert(user);
    // create new token
    const tokenObj = new Token();
    tokenObj.email = user.email;
    tokenObj.token = generateResetToken();
    await this.tokenService.insert(tokenObj);
    // send mail
    try {
      await this.mailService.sendVerificationMail(
        tokenObj.email,
        tokenObj.token,
      );
    } catch (error) {
      throw new InternalServerErrorException('Mail server error');
    }
    return 'User registered. Verification email was sent successfully.';
  }

  /**
   * Send an email to generate link to reset the password
   * @param email
   * @returns String
   */
  async forgotPassword(email: string): Promise<string> {
    // check user existence
    const user = await this.userService.findOne(email);
    if (!user) throw new NotFoundException('Email not registered.');
    // check token existence
    const tokenData = await this.tokenService.findByEmail(email);
    console.log(
      tokenData,
      (new Date().getTime() - tokenData.updatedDate.getTime()) / 60000 < 5,
    );
    if (
      tokenData &&
      (new Date().getTime() - tokenData.updatedDate.getTime()) / 60000 < 5
    ) {
      throw new HttpException(
        'Email was sent recently. Request again after 5 minutes.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    } else {
      // create/update new token
      const newToken = new Token();
      newToken.email = email;
      newToken.token = generateResetToken();
      await this.tokenService.update(newToken);
      // send mail
      try {
        await this.mailService.sendResetMail(newToken.email, newToken.token);
      } catch (error) {
        throw new InternalServerErrorException('Mail server error');
      }
      return 'Password reset mail was sent succesfully.';
    }
  }

  /**
   * Reset password to new password
   * @param user
   * @param token
   * @returns String
   */
  async resetPassword(user: User, token: string): Promise<string> {
    // check user existence
    const { email, password } = user;
    const userData = await this.userService.findOne(email);
    if (!userData) throw new NotFoundException('Email not registered.');
    // check token existence
    const tokenData = await this.tokenService.findByEmailToken(email, token);
    if (!tokenData) throw new NotFoundException('Invalid token.');
    // delete token
    await this.tokenService.delete(email);
    // update password
    userData.password = await generateHashPassword(password);
    await this.userService.update(userData);
    return 'Password was reset. Please use the new password.';
  }

  /**
   * Verify email by token
   * @param token
   * @returns String
   */
  async verifyEmail(token: string): Promise<string> {
    // check token existence
    const tokenData = await this.tokenService.findByToken(token);
    if (!tokenData) throw new NotFoundException('Invalid token.');
    // delete token
    await this.tokenService.delete(tokenData.email);
    // get user and verify
    const user = await this.userService.findOne(tokenData.email);
    if (!user) throw new NotFoundException('Email not registered.');
    user.isVerified = true;
    await this.userService.update(user);
    return 'Email verified.';
  }
}

/**
 * Helpers
 */

/**
 * Formatting the payload
 * @param user
 * @returns payload
 */
function getPayload(user: User) {
  const { firstName, lastName, id, email } = user;
  return {
    email,
    sub: id,
    displayname: `${firstName} ${lastName}`,
  };
}

/**
 * Generate reset token
 * @returns String
 */
function generateResetToken() {
  return (Math.floor(Math.random() * 9000000) + 1000000).toString();
}

/**
 * Generate hashed password
 * @param password
 * @returns String
 */
function generateHashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
