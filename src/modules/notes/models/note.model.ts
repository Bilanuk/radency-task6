import { Model, Column, Table, DataType } from 'sequelize-typescript';
import { NoteCategory } from '../../../common/constants/common.constants';

@Table
export class Note extends Model<Note> {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id!: number;

  @Column({ allowNull: false, validate: { notEmpty: true, len: [3, 50] } })
  name!: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(NoteCategory),
    allowNull: false,
  })
  category!: NoteCategory;

  @Column({ allowNull: false, type: DataType.ARRAY(DataType.STRING) })
  dates!: string[];

  @Column({ allowNull: false, validate: { notEmpty: true, len: [3, 500] } })
  content!: string;

  @Column({ defaultValue: false, allowNull: false })
  isArchived!: boolean;
}
