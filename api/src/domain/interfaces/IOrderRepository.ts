import { Order } from "../entities/Order";

export const ORDER_REPOSITORY = "ORDER REPOSITORY";

export interface IOrderRepository {
    AddOrderAsync(order: Order): Promise<void>;
    GetOrderByIdAsync(id: number): Promise<Order>;
}