import {
    IsNotEmpty,
    IsString,
    IsEmail,
    IsBoolean,
    IsIn,
} from 'class-validator';

export class CreateDriverApplicationDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    referralCode: string;

    @IsBoolean()
    ownCar: boolean;

    @IsIn(['suv/van', 'sedan', 'semi luxury', 'luxury'])
    carType: string;
}
