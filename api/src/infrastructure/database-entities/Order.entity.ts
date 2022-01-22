import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductsEntity } from "./OrderProducts.entity";
import { OrderStatusEntity } from "./OrderStatus.entity";


@Entity("order")
export class OrderEntity {
    @Generated()
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({name: "createdat"})
    createdAt: Date;

    @OneToMany(type => OrderProductsEntity, products => products, { cascade: true })
    products: Array<OrderProductsEntity>;

    @OneToMany(type => OrderStatusEntity, orderStatus => orderStatus)
    status: OrderStatusEntity[]
}