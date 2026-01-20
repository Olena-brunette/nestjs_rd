import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infrastructure/modules/database.module';
import { ListUsersUseCase } from '../use-cases/users/list-users.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [ ListUsersUseCase],
  exports: [ListUsersUseCase],
})

export class UsersApplicationModule {}
