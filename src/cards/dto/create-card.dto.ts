import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCardDto {
    @IsString()
    @IsNotEmpty()
    imgUrl: string;

    @IsString()
    @IsNotEmpty()
    altImg: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    paragraph: string;

    @IsString()
    @IsNotEmpty()
    cardLinkLearnMore: string;
}
