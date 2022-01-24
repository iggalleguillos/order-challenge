import { Inject } from "@nestjs/common";
import { Product } from "src/domain/entities/Product";
import { IOrderRepository, ORDER_REPOSITORY } from "src/domain/interfaces/IOrderRepository";
import { Order } from "../../domain/entities/Order";
import { IOrderService } from "./IOrderService";
import { CreateOrderModel } from "./CreateOrder.model";
import { OrderModel } from "./OrderModel.model";
import { ProductModel } from "../product/Product.model";
import { OrderStatus } from "src/domain/enums/OrderStatus";


export class OrderService implements IOrderService{

    constructor(
    @Inject(ORDER_REPOSITORY)private orderRepository: IOrderRepository)
    { }
    
    async GetOrderByIdAsync(id: number): Promise<OrderModel> {
        const result = await this.orderRepository.GetOrderByIdAsync(id);

        const orderModel = new OrderModel();

        orderModel.id = result.OrderId;
        orderModel.products = result.GetProducts.map(product => {
            return new ProductModel(product.GetId, product.GetName, product.GetPrice, product.GetAmount);
        });

        orderModel.status = result.OrderStatus;

        return orderModel;
    }

    async CreateOrderAsync(order: CreateOrderModel){
        const products = order.products.map(product => { 
            return Product.Create(product.id, product.name, product.price, product.amount);
        });

        const orderEntity = Order.Create(0, products);
        orderEntity.SetOrderCreated();
        this.orderRepository.AddOrderAsync(orderEntity);
    }
}