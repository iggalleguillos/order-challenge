import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrderEntity } from "./Order.entity";
import { StatusEntity } from "./Status.entity";

@Entity("orderstatus")
export class OrderStatusEntity {

    @OneToOne(type => StatusEntity, status => status.id)
    @JoinColumn({ name: "status", referencedColumnName: "id"})
    status: StatusEntity;

    @OneToOne(type => OrderEntity, order => order)
    @JoinColumn({ name: 'orderid'})
    order: OrderEntity;

    @PrimaryGeneratedColumn()
    id: number;

    // @Column({name: "status"})
    // statusId: number;

    // @Column({name: "orderid"})
    // orderId: number;
}