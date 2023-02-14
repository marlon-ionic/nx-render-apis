import { Controller, Get, Headers } from '@nestjs/common';

@Controller('user-agent')
export class UserAgentController {

  @Get()
  getAgent(@Headers('User-Agent') userAgent: string): UserAgentReponse  {
    return {
      userAgent
    }
  }

}

interface UserAgentReponse {
  userAgent: string;
}


