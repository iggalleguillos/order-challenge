import { Product } from "src/domain/entities/Product";

export const PRODUCT_SERVICE = "PRODUCT SERVICE";

export interface IProductService {
    GetProductsAsync() : Promise<Array<Product>>;
}