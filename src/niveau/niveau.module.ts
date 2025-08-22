import { Module } from '@nestjs/common';
import { NiveauService } from './niveau.service';
import { NiveauController } from './niveau.controller';

@Module({
  controllers: [NiveauController],
  providers: [NiveauService],
})
export class NiveauModule {}
