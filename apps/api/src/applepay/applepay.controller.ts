import { Body, Controller, Post } from '@nestjs/common';
import { ApplepayService, ApplepaySessionRequest } from './applepay.service';

@Controller('applepay')
export class ApplepayController {

  constructor(private readonly applePayService: ApplepayService) {}

  @Post('session/start')
  public async sessionStart(@Body() body: ApplepaySessionRequest): Promise<never> {
    return this.applePayService.sessionStart(body) as never;
  }

  @Post('session/authorize')
  public async sessionAuthorize(): Promise<unknown> {
    return {
      processed: true,
      transactionId: '1234',
    };
  }
}
