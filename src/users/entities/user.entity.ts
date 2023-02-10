import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './../enums/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'email',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    name: 'password',
  })
  password: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: Role,
    default: Role.Regular,
  })
  role: Role;

  @OneToMany(() => Coffee, (coffee) => coffee.user)
  coffees: Coffee[];
}
