import { Inject } from "@nestjs/common";
import { Product } from "src/domain/entities/Product";
import { IOrderRepository, ORDER_REPOSITORY } from "src/domain/interfaces/IOrderRepository";
import { Order } from "../../domain/entities/Order";
import { IOrderService } from "./IOrderService";
import { OrderModel } from "./Order.model";


export class OrderService implements IOrderService{

    constructor(
    @Inject(ORDER_REPOSITORY)private orderRepository: IOrderRepository)
    { }
    
    async GetOrderByIdAsync(id: number): Promise<Order> {
        return await this.orderRepository.GetOrderByIdAsync(id);
    }

    async CreateOrderAsync(order: OrderModel){
        const products = order.products.map(product => { 
            return Product.Create(product.id, product.name, product.price, product.amount);
        });

        const orderEntity = Order.Create(0, products);
        this.orderRepository.AddOrderAsync(orderEntity);
    }
}