import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { DriverApplicationService } from './driver-application.service';
import { CreateDriverApplicationDto } from './dto/create-driver-application.dto';

@Controller('driver-application')
export class DriverApplicationController {
    constructor(
        private readonly driverApplicationService: DriverApplicationService,
    ) {}

    @Post()
    create(@Body() createDriverApplicationDto: CreateDriverApplicationDto) {
        return this.driverApplicationService.create(createDriverApplicationDto);
    }

    @Get()
    findAll() {
        return this.driverApplicationService.findAll();
    }

    @Delete('delete')
    async deleteAll() {
        await this.driverApplicationService.deleteAll();
    }
}
