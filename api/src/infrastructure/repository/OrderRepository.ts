import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/Product";
import { OrderStatus } from "src/domain/enums/OrderStatus";
import { Connection, Repository } from "typeorm";
import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";
import { OrderEntity } from "../database-entities/Order.entity";
import { OrderProductsEntity } from "../database-entities/OrderProducts.entity";
import { ProductEntity } from "../database-entities/Product.entity";

@Injectable()
export class OrderRepository implements IOrderRepository {

    constructor( 
        @InjectRepository(OrderEntity)private orderRepository : Repository<OrderEntity>,
        @InjectRepository(OrderProductsEntity)private orderProductRepository : Repository<OrderProductsEntity>,
        @InjectRepository(ProductEntity)private productRepository : Repository<ProductEntity>) {}
    
    async GetOrderByIdAsync(id: number): Promise<Order> {
        const result = await this.orderRepository.findOne({
            id: id
        });

        if(result == null){
            throw new Error(`Order ${id} not found`);
        }

        const products = result.products.map(orderProducts => new Product(orderProducts.product.id, orderProducts.product.name, orderProducts.product.price, orderProducts.amount));
        //const status = result.status.map(orderStatus => OrderStatus.FromId(orderStatus.status.id));
        return new Order(result.id, products);
    }

    async AddOrderAsync(order: Order): Promise<void> {
        const orderEntity = new OrderEntity();

        // orderEntity.products = order.GetProducts().map(product => this.orderProductRepository.create({
        //     amount: product.GetAmount,
        //     product: this.productRepository.create({
        //         name: product.GetName,
        //         price: product.GetPrice
        //     })
        // }));
        
        orderEntity.products = order.GetProducts.map((product: Product) => {
            const orderProducts = new OrderProductsEntity();
            const productEntity = new ProductEntity();
            productEntity.id = product.GetId;
            productEntity.name = product.GetName;
            productEntity.price = product.GetPrice;

            orderProducts.product = productEntity;
            orderProducts.order = orderEntity;
            orderProducts.amount = product.GetAmount
            return orderProducts;
        });

        console.log(orderEntity.products)

        await this.orderRepository.save(orderEntity);
    }
    
}