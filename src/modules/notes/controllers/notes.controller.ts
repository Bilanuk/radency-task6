import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Delete,
  Post,
  Res,
} from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { Note } from '../models/note.model';
import noteSchema from './../../../common/validators/noteSchema';
import dateParser from './../../../shared/utilities/dateParser';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get('/stats')
  async getStats(@Res() response) {
    const stats = await this.noteService.getStats();
    return response.status(HttpStatus.OK).json({
      stats,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const notes = await this.noteService.findAll();
    return response.status(HttpStatus.OK).json({
      notes,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const note = await this.noteService.findOne(id);
    return response.status(HttpStatus.OK).json({
      note,
    });
  }

  @Post()
  async createNote(@Res() response, @Body() note: Note) {
    const validatedNote = await noteSchema.validate({
      ...note,
      dates: undefined,
      ...(note.content && { dates: dateParser(note.content) }),
    });
    const createdNote = await this.noteService.createNote(
      validatedNote as Note,
    );
    return response.status(HttpStatus.CREATED).json({
      note: createdNote,
    });
  }

  @Patch('/:id')
  async updateNote(@Res() response, @Param('id') id, @Body() note: Note) {
    const validatedNote = await noteSchema.validate({
      ...note,
      dates: undefined,
      ...(note.content && { dates: dateParser(note.content) }),
    });
    const { affectedRows, updatedNoteData } = await this.noteService.updateNote(
      id,
      validatedNote as Note,
    );
    if (!affectedRows) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Note not found',
      });
    }
    return response.status(HttpStatus.OK).json({
      note: updatedNoteData,
    });
  }

  @Delete('/:id')
  async deleteNote(@Res() response, @Param('id') id) {
    const note = await this.noteService.findOne(id);
    if (!note) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Note not found',
      });
    }
    await this.noteService.deleteNote(id);
    return response.status(HttpStatus.OK).json({
      message: 'Note deleted successfully',
    });
  }
}
