import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'board'})
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
