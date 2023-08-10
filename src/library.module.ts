import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LibraryController } from './library.controller';
import { Book } from './book.model';
import { LibraryService } from './library.service';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
