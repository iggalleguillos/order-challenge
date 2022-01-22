import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { ORDER_SERVICE } from './application/order/IOrderService';
import { OrderService } from './application/order/OrderService';
import { PRODUCT_SERVICE } from './application/product/IProductService';
import { ProductService } from './application/product/ProductService';
import { ORDER_REPOSITORY } from './domain/interfaces/IOrderRepository';
import { PRODUCT_REPOSITORY } from './domain/interfaces/IProductRepository';
import { OrderController } from './infrastructure/controllers/order.controller';
import { ProductController } from './infrastructure/controllers/Product.controller';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { OrderRepository } from './infrastructure/repository/OrderRepository';
import { ProductRepository } from './infrastructure/repository/ProductRepository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplicationModule,
    InfrastructureModule
  ],
  controllers: [ProductController, OrderController],
  providers: [
    {
      useClass: ProductService,
      provide: PRODUCT_SERVICE
    },
    {
      useClass: ProductRepository,
      provide: PRODUCT_REPOSITORY 
    },
    {
      useClass: OrderService,
      provide: ORDER_SERVICE
    },
    {
      useClass: OrderRepository,
      provide: ORDER_REPOSITORY
    },
  ]
})

export class AppModule {}
