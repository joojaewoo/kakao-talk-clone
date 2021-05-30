import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from '../models/auth.model';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]), UserModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
