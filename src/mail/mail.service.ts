import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { configuration } from '../config';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  /**
   * Send reset email
   * @param email
   * @param token
   * @returns Mail
   */
  async sendResetMail(email: string, token: string) {
    const link =
      configuration().host.url +
      ':' +
      configuration().host.port +
      '/auth/reset-password/' +
      token;

    return this.mailerService.sendMail({
      to: email,
      from: 'libbie65@ethereal.email',
      subject: 'Movie App - Password Reset',
      text: 'Please click the link to reset password: ' + link,
      html:
        'Use this code to reset your password: ' +
        token +
        '<br><br>And Click the link below to reset your password<br><br>' +
        '<a href=' +
        link +
        '>Click here</a>',
    });
  }

  /**
   * Send verification email
   * @param email
   * @param token
   * @returns Mail
   */
  async sendVerificationMail(email: string, token: string) {
    const link =
      configuration().host.url +
      ':' +
      configuration().host.port +
      '/auth/verify/' +
      token;

    return this.mailerService.sendMail({
      to: email,
      from: 'libbie65@ethereal.email',
      subject: 'Movie App - Email verification',
      text: 'Please click the link for verification: ' + link,
      html:
        'Click the link below to verify your email<br><br>' +
        '<a href=' +
        link +
        '>Click here</a>',
    });
  }
}
