import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('coffees')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'name',
  })
  name: string;

  @ManyToOne(() => User, (user) => user.coffees)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
