

import { Controller, Get, Inject } from '@nestjs/common';
import { IProductService, PRODUCT_SERVICE } from 'src/application/product/IProductService';
import { Product } from 'src/domain/entities/Product';

@Controller('products')
export class ProductController {

    constructor(@Inject(PRODUCT_SERVICE)private productService: IProductService) { }

    @Get()
    async GetProducts(): Promise<Array<Product>> {
        return await this.productService.GetProductsAsync();
    }
}