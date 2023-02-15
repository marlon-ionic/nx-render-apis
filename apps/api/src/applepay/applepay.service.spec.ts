import { Test, TestingModule } from '@nestjs/testing';
import { ApplepayService } from './applepay.service';

describe('ApplepayService', () => {
  let service: ApplepayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplepayService],
    }).compile();

    service = module.get<ApplepayService>(ApplepayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
