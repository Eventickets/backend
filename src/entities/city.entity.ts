import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Province } from './province.entity';
import { State } from './state.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @ManyToOne(() => Province, (province) => province.id)
  province: number;

  @ManyToOne(() => State, (state) => state.id)
  state: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
