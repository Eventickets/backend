import {
    Column,
    Entity,
  } from 'typeorm';
  
  @Entity()
  export class Province {
    @Column()
    id: number;
  
    @Column()
    name: string;
}
  