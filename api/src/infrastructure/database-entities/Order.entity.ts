import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductsEntity } from "./OrderProducts.entity";
import { OrderStatusEntity } from "./OrderStatus.entity";


@Entity("order")
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "createdat"})
    createdAt: Date;

    @OneToMany(type => OrderProductsEntity, products => products)
    products: Array<OrderProductsEntity>;

    @OneToMany(type => OrderStatusEntity, orderStatus => orderStatus)
    status: OrderStatusEntity[]
}