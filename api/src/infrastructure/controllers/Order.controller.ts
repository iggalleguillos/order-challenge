
import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Inject, Param, Post, UseInterceptors } from '@nestjs/common';
import { IOrderService, ORDER_SERVICE } from 'src/application/order/IOrderService';
import { Order } from 'src/domain/entities/Order';
import { CreateOrderModel } from '../../application/order/CreateOrder.model';

@Controller('orders')
export class OrderController {

    constructor(@Inject(ORDER_SERVICE)private orderService: IOrderService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    @HttpCode(204)
    async CreateOrderAsync(@Body() order: CreateOrderModel): Promise<void> {
        await this.orderService.CreateOrderAsync(order);
    }

    @Get(":id")
    async GetOrderByIdAsync(@Param("id") id: number): Promise<CreateOrderModel> {
        return await this.orderService.GetOrderByIdAsync(id);
    }
}