import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configAsync } from './ormconfig';
import { CardsModule } from './cards/cards.module';
import { ConfigModule } from '@nestjs/config';
import { DriverApplicationModule } from './driver-application/driver-application.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(configAsync),
    CardsModule,
    DriverApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
