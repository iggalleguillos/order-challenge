
import { ProductModel } from "../product/Product.model";


export class CreateOrderModel {

    products: Array<ProductModel>; 

    constructor(partial : Partial<CreateOrderModel>)
    {
        Object.assign(this, partial);
    }
}