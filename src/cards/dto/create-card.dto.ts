import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCardDto {
    @IsString()
    @IsNotEmpty()
    imgUrl: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    paragraph: string;
}
