import { Test, TestingModule } from '@nestjs/testing';
import { MonstreController } from './monstre.controller';

describe('MonstreController', () => {
  let controller: MonstreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonstreController],
    }).compile();

    controller = module.get<MonstreController>(MonstreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
