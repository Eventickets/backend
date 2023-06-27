import { Entity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Place } from '../place.entity';
import { Event } from './event.entity';

@Entity()
export class EventPlaces {
  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @ManyToOne(() => Place)
  place_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
