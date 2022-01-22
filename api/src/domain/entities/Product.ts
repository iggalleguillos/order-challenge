
export class Product {

    private Id: number;
    private Name: string;
    private Price: number;
    private Amount: number;


    constructor(id: number, name: string, price: number, amout: number) {
        this.Id = id;
        this.Name = name; 
        this.Price = price;
        this.Amount = amout;
    }

    static Create(id: number, name: string, price: number, amount: number) : Product {
        return new Product(id, name, price, amount);
    }

    get GetAmount() : number {
        return this.Amount;
    }

    get GetPrice() : number {
        return this.Price;
    }

    get GetName() : string { 
        return this.Name;
    }

    get GetId() : number {
        return this.Id;
    }
}