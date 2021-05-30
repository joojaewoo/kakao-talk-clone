import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: process.env.FE_URL, credentials: true },
  });
  app.use(cookieParser());
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
};
bootstrap();
