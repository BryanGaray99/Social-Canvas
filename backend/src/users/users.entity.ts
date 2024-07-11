import { Message } from 'src/messages/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, name: 'first_name', comment: 'Primer Nombre' })
  firstName: string;

  @Column({ length: 100, name: 'last_name', comment: 'Segundo Nombre' })
  lastName: string;

  @Column({ length: 20, comment: 'Telefono', nullable: true })
  phone: string;

  @Column({ unique: true, length: 100, comment: 'Correo Electronico' })
  email: string;

  @Column({ length: 100, comment: 'Contraseña' })
  password: string;

  @CreateDateColumn({
    name: 'birth_date',
    comment: 'Fecha de nacimiento',
    nullable: true,
  })
  birthDate: Date;

  @CreateDateColumn({
    name: 'date_created',
    comment: 'Fecha de Creacion',
    nullable: true,
  })
  dateCreated: Date;

  @CreateDateColumn({
    name: 'last_date_login',
    comment: 'Ultima Fecha de Login',
    default: null,
  })
  lastDateLogin: Date;

  @Column({ name: 'is_active', comment: 'Bandera de activo', default: true })
  isActive: boolean;

  @Column({ length: 300, comment: 'Imagen de perfil', nullable: true })
  image: string;

  @Column('jsonb', { nullable: true })
  roomId: { [key: number]: string };

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];
}
