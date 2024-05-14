import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    imgUrl: string;

    @Column()
    title: string;

    @Column()
    paragraph: string;
}
