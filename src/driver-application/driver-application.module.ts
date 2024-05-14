import { Module } from '@nestjs/common';
import { DriverApplicationService } from './driver-application.service';
import { DriverApplicationController } from './driver-application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverApplication } from './entities/driver-application.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DriverApplication])],
    controllers: [DriverApplicationController],
    providers: [DriverApplicationService],
})
export class DriverApplicationModule {}
