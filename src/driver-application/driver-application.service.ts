import { Injectable } from '@nestjs/common';
import { CreateDriverApplicationDto } from './dto/create-driver-application.dto';
import { UpdateDriverApplicationDto } from './dto/update-driver-application.dto';

@Injectable()
export class DriverApplicationService {
  create(createDriverApplicationDto: CreateDriverApplicationDto) {
    return 'This action adds a new driverApplication';
  }

  findAll() {
    return `This action returns all driverApplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverApplication`;
  }

  update(id: number, updateDriverApplicationDto: UpdateDriverApplicationDto) {
    return `This action updates a #${id} driverApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverApplication`;
  }
}
