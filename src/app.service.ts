import { Injectable } from '@nestjs/common';
import { BookService } from './book.service';

@Injectable()
export class AppService {
  constructor(private readonly bookService: BookService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
