import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { TicketStatus } from 'src/enums/ticket-status.enum';
import { Event } from './event.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  description: string;

  @ManyToOne(() => User)
  user_id: number;

  @Column({
    type: 'enum',
    enum: TicketStatus,
  })
  status: TicketStatus;

  @ManyToOne(() => Event, (event) => event.id)
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
