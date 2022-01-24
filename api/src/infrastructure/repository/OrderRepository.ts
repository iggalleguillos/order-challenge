import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/Product";
import { OrderStatus } from "src/domain/enums/OrderStatus";
import { Connection, Equal, Repository } from "typeorm";
import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";
import { OrderEntity } from "../database-entities/Order.entity";
import { OrderProductsEntity } from "../database-entities/OrderProducts.entity";
import { OrderStatusEntity } from "../database-entities/OrderStatus.entity";
import { ProductEntity } from "../database-entities/Product.entity";
import { StatusEntity } from "../database-entities/Status.entity";

@Injectable()
export class OrderRepository implements IOrderRepository {

    constructor( 
        @InjectRepository(OrderEntity)private orderRepository : Repository<OrderEntity>,
        @InjectRepository(OrderProductsEntity)private orderProductRepository : Repository<OrderProductsEntity>,
        @InjectRepository(ProductEntity)private productRepository : Repository<ProductEntity>) {}
    
    async GetOrderByIdAsync(id: number): Promise<Order> {

        const result = await this.orderRepository.createQueryBuilder("order")
            .select("order")
            .leftJoinAndSelect("order.products", "orderproducts")
            .leftJoinAndSelect("order.status", "orderstatus")
            .innerJoinAndSelect("orderproducts.product", "product")
            //.leftJoinAndSelect("orderstatus.status", "status")
            .where("order.id = :id", { id })
            .getOne()

        //const result = await this.orderRepository.findOne(id);
        console.log(result)
        if(result == null){
            throw new Error(`Order ${id} not found`);
        }

        const products = result.products.map(orderProducts => { 
            return new Product(orderProducts.product.id, orderProducts.product.name, orderProducts.product.price, orderProducts.amount);
        });

        const status = result.status.map(status => {
            return OrderStatus.FromId(status.id);
        });

        const order = Order.Create(result.id, products);
        order.SetOrderStatus(status);

        return order;
    }
    
    async AddOrderAsync(order: Order): Promise<void> {
        const orderEntity = new OrderEntity();
        console.log(order);
        orderEntity.products = order.GetProducts.map((product: Product) => {
            const orderProducts = new OrderProductsEntity();
            const productEntity = new ProductEntity();
            productEntity.id = product.GetId;
            productEntity.name = product.GetName;
            productEntity.price = product.GetPrice;

            orderProducts.product = productEntity;
            //orderProducts.order = orderEntity;
            orderProducts.amount = product.GetAmount

            return orderProducts;
        });

        orderEntity.status = order.OrderStatus.map(status => {
            const statusEntity = new StatusEntity();
            const orderStatusEntity = new OrderStatusEntity();
            statusEntity.id = status.id
            orderStatusEntity.status = statusEntity;
            orderStatusEntity.order = orderEntity;

            return orderStatusEntity;
        });

        console.log(orderEntity)

        await this.orderRepository.save(orderEntity);
    }
    
}