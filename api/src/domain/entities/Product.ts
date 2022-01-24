
export class Product {

    private Id: number;
    private Name: string;
    private Price: number;
    private Amount: number;
    private UrlImage: string;


    constructor(id: number, name: string, price: number, amout: number, urlImage: string) {
        this.Id = id;
        this.Name = name; 
        this.Price = price;
        this.Amount = amout;
        this.UrlImage = urlImage;
    }

    static Create(id: number, name: string, price: number, amount: number, urlImage: string) : Product {
        return new Product(id, name, price, amount, urlImage);
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

    get GetUrlImage(): string {
        return this.UrlImage;
    }
}