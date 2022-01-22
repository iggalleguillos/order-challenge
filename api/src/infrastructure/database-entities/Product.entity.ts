import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product"})
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;
    
    @Column()
    price: number;
    
}