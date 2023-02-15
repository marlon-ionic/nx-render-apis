import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadModule } from '../upload';
import { UserAgentModule } from '../user-agent/user-agent.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
      serveStaticOptions: {
        dotfiles: 'allow',
        index: false
      }
    }),
    UploadModule, UserAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
