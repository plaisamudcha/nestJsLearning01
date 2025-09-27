import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

// BODY,PATH PARAMETER,QUERY PARAMETER
@Controller('product')
export class ProductController {
  constructor(private readonly userService: UserService) {}

  @Delete('delete-all')
  deleteAllProducts() {
    return 'DELETE all products';
  }

  // /product/:productId
  @Patch('update/:productId')
  updateProductById(
    @Param('productId') productId: string,
    @Body() body: unknown,
    @Query('price') query?: string
  ) {
    return { productId, body, price: query };
  }

  @Post('create')
  createProduct(@Body() body: unknown, @Body('age') a: unknown) {
    return a;
  }

  @HttpCode(HttpStatus.OK)
  @Post('fakecreate')
  testProduct() {
    return 'TEST product';
  }
}
