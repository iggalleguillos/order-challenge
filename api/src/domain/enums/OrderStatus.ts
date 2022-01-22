

// export enum OrderStatus {
//     CREATED = 0,
//     IN_DELIVERY = 1,
//     DELIVERED = 2
// }

export class OrderStatus {
    public static readonly CREATED = new OrderStatus('CREATED', 0);
    public static readonly IN_DELIVERY = new OrderStatus('IN_DELIVERY', 1);
    public static readonly DELIVERED = new OrderStatus('DELIVERED', 2);

    private constructor(public readonly name: string, public readonly id: number){

    }

    ToJSON() : string {
        return this.name
    }

    static FromName(name: string): OrderStatus {
        const value = (this as any)[name];
        if (value) return value;
        const cls: string = (this as any).prototype.constructor.name;
        throw new RangeError(`Illegal argument: ${name} is not a member of ${cls}`);
    }

    static FromId(id: number) : OrderStatus {
        const value = (this as any)[id];
        if(value) return value;
        const cls: number = (this as any).prototype.constructor.id;
        throw new RangeError(`Illegal argument: ${id} is not a member of ${cls}`);
    }
}