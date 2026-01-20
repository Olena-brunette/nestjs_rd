/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;
  const appName = configService.get<string>('APP_NAME') ?? 'NestJS Application';

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(port);

  console.log(`🚀 ${appName} is running on: http://localhost:${port}/api`);
  console.log(`📝 Environment: ${configService.get<string>('NODE_ENV') ?? 'development'}`);
  console.log(`📚 Architecture: Clean Architecture with Domain-Driven Design`);
}

void bootstrap();
