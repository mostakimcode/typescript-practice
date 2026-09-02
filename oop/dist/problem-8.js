"use strict";
//problme
/*
Take the fare
Build the payment family, then an overloaded fare calculator.

Payment

protected amount: number from the constructor
pay(): string — returns "Paid 30" for amount 30
CashPayment extends Payment — pay() returns "Cash: 30"

BkashPayment extends Payment — constructor takes amount and wallet: string; pay() returns "bKash: 30 to 017" for amount 30 and wallet "017"

PassPayment extends Payment — constructor takes nothing; amount is 0; pay() returns "Pass: no charge"

FareDesk with an overloaded quote:

quote(km: number): number — km * 12
quote(from: string, to: string): number — 100 if from and to differ, 0 if they are the same
Remember: two signatures, one implementation.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    pay() {
        return `Paid ${this.amount}`;
    }
}
class CashPayment extends Payment {
    pay() {
        return `Cash: ${this.amount}`;
    }
}
class BkashPayment extends Payment {
    wallet;
    constructor(amount, wallet) {
        super(amount);
        this.wallet = wallet;
    }
    pay() {
        return `bkash: ${this.amount} to ${this.wallet}`;
    }
}
class PassPayment extends Payment {
    pay() {
        return `Pass: no charge`;
    }
}
class FareDesk {
    quote(a, b) {
        if (typeof a === "number")
            return a * 12;
        return a === b ? 0 : 100;
    }
}
//# sourceMappingURL=problem-8.js.map