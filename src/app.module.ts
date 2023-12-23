import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { CustomersController } from './controller/customers/customers.controller';
import { CustomersService } from './service/customers/customers.service';


@Module({
  imports: [],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
