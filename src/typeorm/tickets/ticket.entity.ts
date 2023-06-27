import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TicketStatus } from './ticketStatus.entity';
import { User } from '../users';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TicketStatus)
  ticket_status_id: number;

  @Column({
    length: 100,
  })
  description: string;

  @ManyToOne(() => User)
  user_id: number;

  @ManyToOne(() => Event)
  event_id: number;

  @Column()
  quantity: number;

  @Column()
  visits: number;

  @Column()
  unit_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
