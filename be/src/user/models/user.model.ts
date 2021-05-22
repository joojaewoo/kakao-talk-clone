import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  nickName: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  stateMessage: string;

  @Field({ nullable: true })
  birthDay: Date;
}
