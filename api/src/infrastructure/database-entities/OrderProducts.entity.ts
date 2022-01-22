import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderEntity } from "./Order.entity";
import { ProductEntity } from "./Product.entity";

@Entity("orderproducts")
export class OrderProductsEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(type => ProductEntity, product => product, { cascade: true })
    @JoinColumn({ name: "productid"})
    product!: ProductEntity;

    @ManyToOne(type => OrderEntity, order => order, { cascade: true, onUpdate: "RESTRICT", onDelete: "CASCADE", orphanedRowAction: "delete" })
    @JoinColumn({ name: 'orderid', referencedColumnName: "id"})
    order!: OrderEntity;

    // @Column({name: "orderid"})
    // orderId: number;

    // @Column({name: "productid"})
    // productId: number;

    @Column()
    amount: number;
}