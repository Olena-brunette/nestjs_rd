/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersPresentationModule } from './presentation/modules/users-presentation.module';
import { AppController } from './presentation/http/controllers/app.controller';
import { HealthController } from './presentation/http/controllers/health.controller';
import { configValidationSchema } from './infrastructure/config/config.validation';
import { appConfig } from './infrastructure/config/app.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV ?? 'development'}`, '.env'],
      load: [appConfig],
      validationSchema: configValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
    UsersPresentationModule,
  ],
  controllers: [AppController, HealthController],
})
export class AppModule {}
