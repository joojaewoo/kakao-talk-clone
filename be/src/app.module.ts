import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthDirective } from './utils/authDirective';
import { verifyToken } from './utils/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/kakao-clone', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    UserModule,
    AuthModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      context: ({ req, res }) => {
        if (!req.cookies) return { res };
        const authUser = verifyToken(req.cookies.jwt);
        return { authUser, res };
      },
      schemaDirectives: { auth: AuthDirective },
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
  ],
})
export class AppModule {}
