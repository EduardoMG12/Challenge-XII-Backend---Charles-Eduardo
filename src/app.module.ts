import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configAsync } from './ormconfig';
import { CardsModule } from './cards/cards.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    CardsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(configAsync),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
