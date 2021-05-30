import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signToken } from '../libs/jwt';
import { User, UserDocument } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async getFriends(): Promise<User[]> {
    const user = await this.userModel.find();
    return user;
  }
  async createUser(email: string, password: string, nickName: string): Promise<Boolean> {
    const createUser = new this.userModel({ email, password, nickName });
    createUser.save();
    return true;
  }
  async getMyInfo(_id: string): Promise<User> {
    const myInfo = await this.userModel.findById({ _id });
    return myInfo;
  }
  async login(email: string, password: string): Promise<String> {
    const { _id: id } = (await this.userModel.findOne({ email, password })) || {};
    if (!id) return null;
    else return signToken(id);
  }
  async getInfo(email: string): Promise<User> {
    const info = await this.userModel.findOne({ email });
    return info;
  }
}
