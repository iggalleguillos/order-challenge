import { Order } from "src/domain/entities/Order";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderEntity } from "./Order.entity";
import { ProductEntity } from "./Product.entity";

@Entity("orderproducts")
export class OrderProductsEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToMany(type => ProductEntity)
    @JoinColumn({ name: "productid"})
    product: ProductEntity;

    @ManyToMany(type => OrderEntity)
    @JoinColumn({ name: 'orderid'})
    order: Order;

    @Column({name: "orderid"})
    orderId: number;

    @Column({name: "productid"})
    productId: number;

    @Column()
    amount: number;
}