import { ObjectIdColumn, Entity, Column } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @Column()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
