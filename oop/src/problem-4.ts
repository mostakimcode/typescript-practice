//problem
/*
The tong shop bill

Write an Order class for the tea stall. It needs both halves: a constructor to open the bill, then methods to work on it.

A field table: number, filled by a constructor that takes the table number
A field items: string[] starting empty — not a constructor parameter
addItem(name: string): void — appends the item
remove(name: string): void — removes the first matching item only, and does nothing if it is not there
count(): number — how many items
totalPrice(): number — using: cha 10, "malai cha" 20, biscuit 5, singara 12. Anything unknown counts as 0
applyDiscount(percent: number): number — the total minus that percentage, rounded with Math.round
*/

class Order {
    table: number
    items: string[] = []
    prices: Record<string, number> = {
        cha: 10,
        "malai cha": 20,
        biscuit: 5,
        singara: 12
    }


    constructor(table: number){
        this.table = table;
    }

    addItem(name: string): void {
        this.items.push(name);
    }

    remove(name: string): void {
        let index = this.items.indexOf(name);
        if(index !== -1){
            this.items.splice(index, 1)
        }
    }
    count(): number {
        return this.items.length;
    }
    totalPrice(): number {
        return this.items.reduce((sum, item) => sum +( this.prices[item] ?? 0), 0);
    }
    applyDiscount(percent: number): number {
        return Math.round(this.totalPrice() * (1 - (percent / 100)));
    }
}