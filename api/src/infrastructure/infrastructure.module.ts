import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORDER_REPOSITORY } from 'src/domain/interfaces/IOrderRepository';
import { PRODUCT_REPOSITORY } from 'src/domain/interfaces/IProductRepository';
import { Connection, Repository } from 'typeorm';
import { OrderEntity } from './database-entities/Order.entity';
import { OrderProductsEntity } from './database-entities/OrderProducts.entity';
import { OrderStatusEntity } from './database-entities/OrderStatus.entity';
import { ProductEntity } from './database-entities/Product.entity';
import { StatusEntity } from './database-entities/Status.entity';
import { OrderRepository } from './repository/OrderRepository';
import { ProductRepository } from './repository/ProductRepository';
import * as path from 'path';

@Module({
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: OrderRepository,
      provide: ORDER_REPOSITORY
    },
    {
      useClass: ProductRepository,
      provide: PRODUCT_REPOSITORY
    },
    OrderRepository,
    ProductRepository
  ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD.toString(),
      database: process.env.DB_NAME,
      entities: [path.resolve(__dirname, '**/*.entity{.ts,.js}')],
      synchronize: false
    }),
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, OrderProductsEntity, StatusEntity, OrderStatusEntity])
  ],
  exports: [OrderRepository, ProductRepository, TypeOrmModule]
})

export class InfrastructureModule {
  constructor(private connection: Connection) {}
}