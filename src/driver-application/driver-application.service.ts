import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverApplication } from './entities/driver-application.entity';
import { CreateDriverApplicationDto } from './dto/create-driver-application.dto';

@Injectable()
export class DriverApplicationService {
    constructor(
        @InjectRepository(DriverApplication)
        private driverApplicationsRepository: Repository<DriverApplication>,
    ) {}

    async create(
        createDriverApplicationDto: CreateDriverApplicationDto,
    ): Promise<DriverApplication> {
        const newApplication = this.driverApplicationsRepository.create(
            createDriverApplicationDto,
        );
        return this.driverApplicationsRepository.save(newApplication);
    }

    findAll() {
        return this.driverApplicationsRepository.find();
    }
}
