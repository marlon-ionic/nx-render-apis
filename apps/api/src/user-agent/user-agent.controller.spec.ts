import { Test, TestingModule } from '@nestjs/testing';
import { UserAgentController } from './user-agent.controller';

describe('UserAgentController', () => {
  let controller: UserAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAgentController],
    }).compile();

    controller = module.get<UserAgentController>(UserAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
