import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  mail: string;

  @Column()
  accept_terms_and_conditions: boolean;

  @Column()
  allow_sending_emails: boolean;

  @Column()
  password: string;

  @Column()
  refresh_token: string;

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
