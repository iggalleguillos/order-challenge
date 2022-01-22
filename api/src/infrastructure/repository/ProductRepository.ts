import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/Product";
import { IProductRepository } from "src/domain/interfaces/IProductRepository";
import { Connection, Repository } from "typeorm";
import { ProductEntity } from "../database-entities/Product.entity";

@Injectable()
export class ProductRepository implements IProductRepository {

    constructor(private connection: Connection,
        @InjectRepository(ProductEntity)private productRepository : Repository<ProductEntity>) {}

    async GetProductsAsync(): Promise<Array<Product>> {
        const result = await this.productRepository.find();

        return result.map(product => new Product(product.id, product.name, product.price, 0));

    }
    
}