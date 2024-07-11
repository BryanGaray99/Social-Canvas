import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('provider')
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: 'Nombre del proveedor' })
  name: string;

  @Column({ length: 100, comment: 'Tipo de proveedor' })
  type: string;

  @Column({ length: 150, comment: 'Url del api' })
  api_url: string;

  @Column({ length: 100, name: 'api_token', comment: 'Token del api' })
  apiToken: string;

  @CreateDateColumn({ name: 'date_created', comment: 'Fecha de creacion' })
  dateCreated: Date;
}
