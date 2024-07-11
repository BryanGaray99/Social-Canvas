import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/users/users.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.sentMessages)
  sender: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.receivedMessages)
  receiver: UserEntity;
}
