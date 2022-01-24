import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductsEntity } from "./OrderProducts.entity";

@Entity("product")
export class ProductEntity {

    @Generated()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column({name: "urlimage"})
    urlImage: string; 
}