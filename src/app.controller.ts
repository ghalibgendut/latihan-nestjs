import { Controller, Get} from '@nestjs/common';
import { create } from 'domain';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('coba')
  // getHi(): string {
  //   return this.appService.getHello();
  // }
}
