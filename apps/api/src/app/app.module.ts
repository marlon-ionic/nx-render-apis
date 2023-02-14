import { Module } from '@nestjs/common';
import { UploadModule } from '../upload';
import { UserAgentModule } from '../user-agent/user-agent.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UploadModule, UserAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
