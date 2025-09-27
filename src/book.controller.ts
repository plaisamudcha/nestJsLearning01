import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks() {
    // logic: verify authentication
    // fetch books from database
    // controller does not contain business logic
    // it just call service to do the job
    return this.bookService.getAllBooks();
  }

  @Get('chapter')
  getBookChapters() {
    return 'GET book chapters';
  }
}
