import { Product } from "../entities/Product";

export const PRODUCT_REPOSITORY = "PRODUCT REPOSITORY";

export interface IProductRepository {
    GetProductsAsync() : Promise<Array<Product>>
}