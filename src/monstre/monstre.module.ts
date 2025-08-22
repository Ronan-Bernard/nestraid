import { Module } from '@nestjs/common';
import { MonstreController } from './monstre.controller';

@Module({
  controllers: [MonstreController]
})
export class MonstreModule {}
