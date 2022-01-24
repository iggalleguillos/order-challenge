import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderEntity } from "./Order.entity";
import { ProductEntity } from "./Product.entity";

@Entity("orderproducts")
export class OrderProductsEntity {

    @Generated()
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @OneToOne(type => ProductEntity, product => product, { primary: true})
    @JoinColumn([{name: "productid", referencedColumnName: "id"}])
    product: ProductEntity;

    @OneToOne(type => OrderEntity, order => order, { primary: true})
    @JoinColumn([{name: "orderid", referencedColumnName: "id"}])
    order: OrderEntity;
    
    @Column()
    amount: number;
}