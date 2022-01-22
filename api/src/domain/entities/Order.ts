import { OrderStatus } from "../enums/OrderStatus";
import { Product } from "./Product";


export class Order {

    private Id: number;
    private ProductList: Array<Product>;
    private Status: OrderStatus[]

    constructor(id: number, productList: Array<Product>) {
        this.Id = id;
        this.ProductList = productList;
    }

    static Create(id: number, productList: Array<Product>) : Order {
        if(productList.length == 0){
            throw new Error("Product list must contains at least one item")
        }

        return new Order(id, productList);
    }

    GetTotalPrice() : number {
        let total: number = 0;
        this.ProductList.forEach(a => total+= a.GetPrice * a.GetAmount);

        return total;
    }

    get GetProducts() : Array<Product> {
        return this.ProductList;
    }

    SetOrderCreated() : void {
        this.Status.push(OrderStatus.CREATED);
    }

    SetOrderInDelivery() : void {
        this.Status.push(OrderStatus.IN_DELIVERY);
    }

    SetOrderDelivered() : void {
        this.Status.push(OrderStatus.DELIVERED);
    }

    SetOrderStatus(status: OrderStatus[]) : void {
        this.Status = status;
    }
}