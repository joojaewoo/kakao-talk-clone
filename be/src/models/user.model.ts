import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  email: String;

  @Field(() => String)
  @Prop()
  nickName: String;

  @Field(() => String)
  @Prop()
  password: String;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
