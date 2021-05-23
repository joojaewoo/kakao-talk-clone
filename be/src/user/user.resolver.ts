import { Args, Context, Mutation, Query, Resolver, Directive } from '@nestjs/graphql';
import { Response } from 'express';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Directive('@auth')
  @Query(() => User)
  async myInfo(@Context() { authUser }: { authUser: string }) {
    const info = await this.userService.getMyInfo(authUser);
    return info;
  }
  @Directive('@auth')
  @Query(() => [User])
  async friends() {
    return this.userService.getFriends();
  }
  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('nickName') nickName: string,
    @Args('password') password: string,
  ) {
    return this.userService.createUser(email, nickName, password);
  }

  @Mutation(() => Boolean)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() { res }: { res: Response },
  ) {
    const token = await this.userService.login(email, password);
    if (!token) return false;
    res.cookie('jwt', token, { httpOnly: true, sameSite: 'strict' });
    return true;
  }
}
