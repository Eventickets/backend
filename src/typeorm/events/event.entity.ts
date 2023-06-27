import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EventStatus } from './eventStatus.entity';
import { EventTypes } from './eventTypes.entity';
import { EventPlaces } from './eventPlaces.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @ManyToOne(() => EventStatus)
  event_status_id: number;

  @ManyToOne(() => EventTypes)
  event_types_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => EventPlaces, (eventPlaces) => eventPlaces.event)
  places: EventPlaces[];
}
