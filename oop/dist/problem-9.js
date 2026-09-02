"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    receipt() {
        return `${this.pay} | fee ${this.fee}`;
    }
    total() {
        return this.amount + this.fee;
    }
}
class BkashPayment extends Payment {
    wallet;
    constructor(amount, wallet) {
        super(amount);
        this.wallet = wallet;
    }
    pay() {
        return `bkash ${this.amount} to ${this.wallet}`;
    }
    get fee() {
        return Math.round((this.amount * 1.85) / 100);
    }
}
class CashPayment extends Payment {
    constructor(amount) {
        super(amount);
    }
    pay() {
        return `Cash ${this.amount}`;
    }
    get fee() {
        return 0;
    }
}
class CardPayment extends Payment {
    last4;
    constructor(amount, last4) {
        super(amount);
        this.last4 = last4;
    }
    pay() {
        return `Card ****${this.last4} ${this.amount}`;
    }
    get fee() {
        return ((this.amount * 15) / 100);
    }
}
//# sourceMappingURL=problem-9.js.map