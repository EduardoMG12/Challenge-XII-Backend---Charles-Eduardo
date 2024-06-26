import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}

    @Post()
    create(@Body() createCardDto: CreateCardDto) {
        return this.cardsService.create(createCardDto);
    }

    @Get()
    findAll() {
        return this.cardsService.findAll();
    }

    @Delete('delete')
    async deleteAll() {
        await this.cardsService.deleteAll();
    }
}
