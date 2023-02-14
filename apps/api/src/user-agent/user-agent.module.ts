import { Module } from '@nestjs/common';
import { UserAgentController } from './user-agent.controller';

@Module({
  controllers: [UserAgentController]
})
export class UserAgentModule {}
