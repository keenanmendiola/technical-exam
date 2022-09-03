import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';

@Entity('Todos')
export class Todo extends Model {

  @Column()
    description!: string;
}