import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      message: 'Welcome to NestJS API',
      version: '1.0.0',
     
    };
  }
}

