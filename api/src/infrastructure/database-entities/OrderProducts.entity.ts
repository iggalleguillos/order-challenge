import { Column, Entity, Generated, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderEntity } from "./Order.entity";
import { ProductEntity } from "./Product.entity";

@Entity("orderproducts")
export class OrderProductsEntity {

    @Generated()
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @OneToOne(type => ProductEntity, product => product.id, { cascade: false, eager: true })
    @JoinColumn({ name: "productid", referencedColumnName: "id"})
    product!: ProductEntity;

    @OneToOne(type => OrderEntity, order => order, { cascade: false, eager: true })
    @JoinColumn({ name: 'orderid', referencedColumnName: "id"})
    order!: OrderEntity;

    // @Column({name: "orderid"})
    // orderId: number;

    // @Column({name: "productid"})
    // productId: number;

    @Column()
    amount: number;
}