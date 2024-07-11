import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { UserEntity } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, UserEntity])],
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
