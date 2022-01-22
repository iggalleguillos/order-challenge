
import { Body, ClassSerializerInterceptor, Controller, HttpCode, Inject, Post, UseInterceptors } from '@nestjs/common';
import { IOrderService, ORDER_SERVICE } from 'src/application/order/IOrderService';
import { Order } from 'src/domain/entities/Order';
import { OrderModel } from '../../application/order/Order.model';

@Controller('orders')
export class OrderController {

    constructor(@Inject(ORDER_SERVICE)private orderService: IOrderService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    @HttpCode(204)
    async CreateOrderAsync(@Body() order: OrderModel): Promise<void> {
        await this.orderService.CreateOrderAsync(order);
    }
}