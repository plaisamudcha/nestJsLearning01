import { Injectable } from '@nestjs/common';

// providers
@Injectable()
export class BookService {
  getAllBooks() {
    return 'GET all books from service';
  }
}
