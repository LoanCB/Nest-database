import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import configurationConfig from './config/configuration.config';

const configService = new ConfigService(configurationConfig());

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.get('port'));
}
bootstrap();
