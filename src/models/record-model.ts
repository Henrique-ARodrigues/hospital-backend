interface RecordModelProps {
    id: number;
    name: string;
    priority: number;
    order: number;
    createdAt: Date;
    updatedAt: Date | null;
}


class RecordModel {
    private id: number;
    private name: string;
    private priority: number;
    private order: number;
    private createdAt: Date;
    private updatedAt: Date | null;

    constructor({
        id,
        name,
        priority,
        order,
        createdAt,
        updatedAt,

    }: RecordModelProps) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.order = order;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }

    public getId():number {
        return this.id;

    }

    public getName():string {
        return this.name;

    }

    public setName(name:string):void {
        this.name = name;       
    }
    
    public getPriotity():number {
        return this.priority;

    }

    public setPriority(priority:number):void {
        this.priority = priority;       
    }

    public getOrder():number {
        return this.order;

    }

    public setOrder(order:number):void {
        this.order = order;

    }

    public getCreatedAt():Date {
        return this.createdAt

    }

    public setCreatedAt(createdAt:Date):void {
        this.createdAt = createdAt;

    }

    public getUpdatedAt():Date | null {
        return this.updatedAt;

    }

    public setUpdatedAt(updatedAt:Date | null):void {
        this.updatedAt = updatedAt;
    }

}

const X: RecordModel = new RecordModel({
    id: 4,
    name: 'Pedro',
    priority: 2,
    order: 1,
    createdAt: new Date(),
    updatedAt: null,
})


console.log(X);

X.setName('Henriquw');

console.log(X, X.getName());