
import { ProductModel } from "../product/Product.model";


export class OrderModel {

    products: Array<ProductModel>; 

    constructor(partial : Partial<OrderModel>)
    {
        Object.assign(this, partial);
    }
}