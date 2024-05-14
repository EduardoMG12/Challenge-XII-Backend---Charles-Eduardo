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
    ): Promise<string> {
        const newApplication = this.driverApplicationsRepository.create(
            createDriverApplicationDto,
        );
        await this.driverApplicationsRepository.save(newApplication);
        return `Welcome, ${newApplication.firstName}`;
    }

    findAll() {
        return this.driverApplicationsRepository.find();
    }
}
