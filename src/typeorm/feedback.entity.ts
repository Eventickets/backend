import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ticket } from './tickets';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  description: string;

  @OneToOne(() => Ticket)
  ticket_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
