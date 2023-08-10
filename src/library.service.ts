import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({
      where: {
        id,
      },
    });
  }

  async createBook(book: Book): Promise<Book> {
    return this.bookModel.create(book as any);
  }
}
