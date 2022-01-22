import { Module } from '@nestjs/common';
import { ORDER_REPOSITORY } from 'src/domain/interfaces/IOrderRepository';
import { PRODUCT_REPOSITORY } from 'src/domain/interfaces/IProductRepository';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { OrderRepository } from 'src/infrastructure/repository/OrderRepository';
import { ProductRepository } from 'src/infrastructure/repository/ProductRepository';
import { ORDER_SERVICE } from './order/IOrderService';
import { OrderService } from './order/OrderService';
import { PRODUCT_SERVICE } from './product/IProductService';
import { ProductService } from './product/ProductService';


@Module({
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: OrderService,
      provide: ORDER_SERVICE
    },
    {
      // You can switch useClass to different implementation
      useClass: ProductService,
      provide: PRODUCT_SERVICE
    },
    {
      // You can switch useClass to different implementation
      useClass: OrderRepository,
      provide: ORDER_REPOSITORY
    },
    {
      useClass: ProductRepository,
      provide: PRODUCT_REPOSITORY
    },
    OrderService,
    ProductService,
    ProductRepository
  ],
  imports: [
    InfrastructureModule
  ],
  exports: [OrderService, ProductService]
})

export class ApplicationModule {}