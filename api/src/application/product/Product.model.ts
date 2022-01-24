

export class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public amount: number;
    public urlImage: string;

    constructor(id: number, name: string, price: number, amount: number, urlImage: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.urlImage = urlImage;
    }
}