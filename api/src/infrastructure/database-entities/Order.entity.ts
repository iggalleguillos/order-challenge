import { Column, Entity, Generated, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderProductsEntity } from "./OrderProducts.entity";
import { OrderStatusEntity } from "./OrderStatus.entity";
import { ProductEntity } from "./Product.entity";


@Entity("order")
export class OrderEntity {
    @Generated()
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({name: "createdat"})
    createdAt: Date;

    @OneToMany(type => OrderProductsEntity, orderProducts => orderProducts.product, { cascade: true, eager: true })
    products: OrderProductsEntity[];

    @OneToMany(type => OrderStatusEntity, orderStatus => orderStatus.status, { cascade: true, eager: true })
    status: OrderStatusEntity[]
}