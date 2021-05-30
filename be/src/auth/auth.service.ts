import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from '../models/auth.model';
import smtpTransport from '../libs/email';
import { getRandomNum } from '../libs/utils';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}
  async sendEmail(email: string) {
    try {
      const number = getRandomNum();
      const mailOptions = {
        from: 'jaewoo`s clone project',
        to: email,
        subject: '[카카오톡 클론]인증 관련 이메일 입니다',
        text: '오른쪽 숫자 6자리를 입력해주세요 : ' + number,
      };
      await this.authModel.updateOne({ email }, { auth: number }, { upsert: true });
      const result = await smtpTransport.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }
  async authEmail(email: string, auth: string) {
    const authInfo = await this.authModel.findOne({ email, auth });
    if (authInfo) return true;
    return false;
  }
}
