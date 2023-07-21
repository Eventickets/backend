import {
    Column,
    Entity,
  } from 'typeorm';
  
  @Entity()
  export class State {
    @Column()
    id: number;
  
    @Column()
    name: string;
}
  