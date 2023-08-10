import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NotesController } from './controllers/notes.controller';
import { Note } from './models/note.model';
import { NotesService } from './services/notes.service';

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
