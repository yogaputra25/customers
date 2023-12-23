import { Controller, Get, Req } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
