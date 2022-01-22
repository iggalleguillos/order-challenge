import { Inject } from "@nestjs/common";
import { Product } from "src/domain/entities/Product";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/interfaces/IProductRepository";
import { IProductService } from "./IProductService";


export class ProductService implements IProductService {

    constructor(@Inject(PRODUCT_REPOSITORY)private productRepository : IProductRepository) { }
    
    async GetProductsAsync(): Promise<Array<Product>> {
        return await this.productRepository.GetProductsAsync();
    }

    
}