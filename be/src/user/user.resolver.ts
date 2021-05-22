import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { User } from './models/user.model';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw NotFoundException;
    }
    return user;
  }
}
