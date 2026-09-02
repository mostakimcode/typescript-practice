//problem
/*
The payment plan

Payment (abstract)

protected amount: number from the constructor
abstract pay(): string
abstract get fee(): number
Concrete receipt(): string — returns `${this.pay()} | fee ${this.fee}`
Concrete total(): number — amount + fee
BkashPayment extends Payment

Constructor takes amount and wallet: string
pay() → "bKash 1000 to 017" for amount 1000, wallet "017"
fee → 1.85% of the amount, rounded with Math.round
CashPayment extends Payment

pay() → "Cash 1000"
fee → always 0
CardPayment extends Payment

Constructor takes amount and last4: string
pay() → "Card ****4242 1000" for amount 1000, last4 "4242"
fee → a flat 15
*/


abstract class Payment{
    constructor(protected amount:number){}
    abstract pay():string
    abstract get fee(): number

    receipt():string {
        return `${this.pay} | fee ${this.fee}`
    }
    total():number {
        return this.amount + this.fee
    }
}

class BkashPayment extends Payment {
    constructor(amount: number, private wallet:string){
        super(amount)
    }
    pay() {
        return `bkash ${this.amount} to ${this.wallet}`
    }
    get fee(){
        return Math.round((this.amount * 1.85) / 100)
    }
}

class CashPayment extends Payment{
    constructor(amount:number){
        super(amount)
    }
    pay(){
        return `Cash ${this.amount}`
    }
    get fee(){
        return 0
    }
}

class CardPayment extends Payment{
    constructor(amount:number, private last4:string){
        super(amount)
    }
    pay(){
        return `Card ****${this.last4} ${this.amount}`
    }
    get fee(){
        return ((this.amount * 15)/100)
    }
}