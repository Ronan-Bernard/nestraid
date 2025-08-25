import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MonstreModule } from './monstre/monstre.module';
import { NiveauModule } from './niveau/niveau.module';
import { CandidatModule } from './candidat/candidat.module';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/raidleader.db',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MonstreModule,
    NiveauModule,
    CandidatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
