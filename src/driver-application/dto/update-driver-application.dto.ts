import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverApplicationDto } from './create-driver-application.dto';

export class UpdateDriverApplicationDto extends PartialType(CreateDriverApplicationDto) {}
