import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(config.get('ENVIROMENT').host);
}
bootstrap();
