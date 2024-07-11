import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/users/users.entity';
import { ProviderEntity } from 'src/providers/providers.entity';

export enum State {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('social_network')
export class SocialNetworkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: 'Nombre de la red social' })
  name: string;

  @CreateDateColumn({ name: 'date_created', comment: 'Fecha de creacion' })
  dateCreated: Date;

  @Column({
    type: 'enum',
    enum: State,
    default: State.ACTIVE,
    comment: 'Estado de la red social',
  })
  state: State;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => ProviderEntity)
  @JoinColumn()
  provider: ProviderEntity;
}
