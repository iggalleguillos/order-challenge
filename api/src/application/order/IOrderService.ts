import { Order } from "src/domain/entities/Order";
import { CreateOrderModel } from "./CreateOrder.model";
import { OrderModel } from "./OrderModel.model";

export const ORDER_SERVICE = "ORDER SERVICE";

export interface IOrderService {
    CreateOrderAsync(order: CreateOrderModel) : Promise<void>;
    GetOrderByIdAsync(id: number) : Promise<OrderModel>;
}