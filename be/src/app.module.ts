import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthDirective } from './libs/authDirective';
import { verifyToken } from './libs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, {
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
        origin: process.env.FE_URL,
        credentials: true,
      },
    }),
  ],
})
export class AppModule {}
