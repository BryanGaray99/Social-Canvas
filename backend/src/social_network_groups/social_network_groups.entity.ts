import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { SocialNetworkEntity } from 'src/social_networks/social_networks.entity';

export enum State {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('social_network_group')
export class SocialNetworkGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: 'Nombre del grupo' })
  name: string;

  @Column({ length: 200, comment: 'Descripcion del grupo' })
  description: string;

  @Column({ length: 200, comment: 'Imagen del grupo' })
  image: string;

  @Column({
    type: 'enum',
    enum: State,
    default: State.ACTIVE,
    comment: 'Estado del grupo',
  })
  state: State;

  @CreateDateColumn({ name: 'date_created', comment: 'Fecha de creacion' })
  dateCreated: Date;

  @OneToOne(() => SocialNetworkEntity)
  @JoinColumn()
  social_network: SocialNetworkEntity;
}
