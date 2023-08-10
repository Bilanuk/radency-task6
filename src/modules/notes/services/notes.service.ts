import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize/types';
import { Note } from './../models/note.model';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note,
  ) {}

  async findAll(): Promise<Note[]> {
    return this.noteModel.findAll();
  }

  findOne(id: string): Promise<Note> {
    return this.noteModel.findOne({
      where: {
        id,
      },
    });
  }

  async createNote(note: Note): Promise<Note> {
    return this.noteModel.create(note as Note);
  }

  async updateNote(
    id: number,
    updatedNote: Note,
  ): Promise<{ affectedRows: number; updatedNoteData: Note }> {
    const [affectedRows, [updatedNoteData]] = await Note.update(updatedNote, {
      where: { id },
      returning: true,
    });
    return { affectedRows, updatedNoteData };
  }

  async deleteNote(id: number): Promise<void> {
    const options: FindOptions = { where: { id } };
    const note = await Note.findOne(options);
    if (note) {
      await note.destroy();
    }
  }

  async getStats(): Promise<any> {
    const options: FindOptions = { attributes: ['category', 'isArchived'] };
    const notes = await Note.findAll(options);

    const stats: Record<string, Record<string, number>> = {};
    notes.forEach((note) => {
      const { category, isArchived } = note.dataValues;
      if (!stats[category]) {
        stats[category] = { activeNotes: 0, archivedNotes: 0 };
      }
      if (isArchived) {
        stats[category].archivedNotes++;
      } else {
        stats[category].activeNotes++;
      }
    });

    return stats;
  }
}
