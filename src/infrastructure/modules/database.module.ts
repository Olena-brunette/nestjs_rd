import { Module } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { USER_REPOSITORY } from '../../domain/repositories/user.repository.interface';


@Module({
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [USER_REPOSITORY],
})
export class DatabaseModule {}

