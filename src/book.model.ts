import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model {
  @Column
  bookName: string;

  @Column
  authorName: string;

  @Column
  publishYear: number;

  @Column({ defaultValue: true })
  isAvailable: boolean;
}
