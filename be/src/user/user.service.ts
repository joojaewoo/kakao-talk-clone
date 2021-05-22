import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  async findOneById(id: string): Promise<User> {
    return {
      id: '123',
      email: '123',
      nickName: '123',
      password: '1234',
      stateMessage: null,
      birthDay: null,
    };
  }
}
