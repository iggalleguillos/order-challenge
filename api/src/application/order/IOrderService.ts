import { Order } from "src/domain/entities/Order";
import { OrderModel } from "./Order.model";

export const ORDER_SERVICE = "ORDER SERVICE";

export interface IOrderService {
    CreateOrderAsync(order: OrderModel) : Promise<void>;
    GetOrderByIdAsync(id: number) : Promise<Order>;
}