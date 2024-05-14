import { Module } from '@nestjs/common';
import { DriverApplicationService } from './driver-application.service';
import { DriverApplicationController } from './driver-application.controller';

@Module({
    controllers: [DriverApplicationController],
    providers: [DriverApplicationService],
})
export class DriverApplicationModule {}
