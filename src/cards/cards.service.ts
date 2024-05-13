import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const newCard = this.cardsRepository.create(createCardDto);
    return this.cardsRepository.save(newCard);
  }

  findAll() {
    return this.cardsRepository.find();
  }
}
