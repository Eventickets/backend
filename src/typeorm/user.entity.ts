import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({
    length: 100,
  })
  mail: string;

  @Column()
  accept_terms_and_conditions: boolean;

  @Column()
  allow_sending_emails: boolean;

  @Column({
    length: 45,
  })
  instagram: string;

  @Column({
    length: 45,
  })
  twitter: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
