import { Module } from '@nestjs/common';
import { UsersApplicationModule } from '../../application/modules/users.module';
import { UsersController } from '../http/controllers/users.controller';


@Module({
  imports: [UsersApplicationModule],
  controllers: [UsersController],
})
export class UsersPresentationModule {}

