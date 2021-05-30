import { Args, Context, Mutation, Query, Resolver, Directive } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { Auth } from '../models/auth.model';
import { AuthService } from './auth.service';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Mutation(() => Boolean)
  async sendEmail(@Args('email') email: string) {
    const userInfo = await this.userService.getInfo(email);
    console.log(userInfo);
    if (userInfo) return false;
    return await this.authService.sendEmail(email);
  }
  @Mutation(() => Boolean)
  async authEmail(@Args('email') email: string, @Args('auth') auth: string) {
    console.log(email, auth);
    return await this.authService.authEmail(email, auth);
  }
}
