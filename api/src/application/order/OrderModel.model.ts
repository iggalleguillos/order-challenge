import { OrderStatus } from "src/domain/enums/OrderStatus";
import { ProductModel } from "../product/Product.model";


export class OrderModel {

    id: number;
    products: ProductModel[];
    status: OrderStatus[];
}