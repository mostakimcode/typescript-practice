"use strict";
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
        return `Took ${this.amount} taka, gave change`;
    }
}
class BkashPayment extends Payment {
    wallet;
    constructor(amount, wallet) {
        super(amount);
        this.wallet = wallet;
    }
    pay() {
        return `Sent ${this.amount} to ${this.wallet}, waiting for SMS`;
    }
}
class PassPayment extends Payment {
    pay() {
        return "Pass shown, no charge";
    }
}
const fares = [
    new CashPayment(30),
    new BkashPayment(30, "017xxxxxxxx"),
    new PassPayment(0),
];
for (const fare of fares) {
    console.log(fare.pay());
}
//# sourceMappingURL=practice.js.map