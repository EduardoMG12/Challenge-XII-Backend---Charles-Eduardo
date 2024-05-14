import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { DriverApplicationService } from './driver-application.service';
import { CreateDriverApplicationDto } from './dto/create-driver-application.dto';
import { UpdateDriverApplicationDto } from './dto/update-driver-application.dto';

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

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.driverApplicationService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateDriverApplicationDto: UpdateDriverApplicationDto,
    ) {
        return this.driverApplicationService.update(
            +id,
            updateDriverApplicationDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.driverApplicationService.remove(+id);
    }
}
