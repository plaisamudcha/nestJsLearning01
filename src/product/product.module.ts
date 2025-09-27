import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ProductController],
  providers: [],
  exports: []
})
export class ProductModule {}
