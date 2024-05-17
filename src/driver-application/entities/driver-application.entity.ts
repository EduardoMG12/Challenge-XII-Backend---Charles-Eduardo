import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DriverApplication {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    referralCode: string;

    @Column()
    ownCar: boolean;

    @Column()
    carType: string;
}
