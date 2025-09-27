import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'AppController: GET';
  }

  @Post()
  postHello() {
    return { message: 'AppController: POST' };
  }
}
