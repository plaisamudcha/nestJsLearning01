import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { ProductModule } from './product/product.module';
import { BookService } from './book.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
  exports: [BookService]
})
export class AppModule {}
