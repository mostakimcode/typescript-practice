"use strict";
//problem
/*
Reopen the bKash account
Take module 3's BkashAccount and put accessors on it.

public readonly phone: string and private pin: string, both as parameter properties
private _balance: number, set from a constructor argument opening (default 0), in the order phone, pin, opening
get balance(): number — returns the stored balance, replacing module 3's getBalance()
set balance(value: number) — ignores any value below 0 and keeps the old one; otherwise stores it
get status(): string — "empty" at exactly 0, "low" below 100, otherwise "fine"
cashIn(amount: number): boolean — adds to the balance and returns true; returns false and changes nothing if amount is 0 or less
sendMoney(amount: number, pin: string): string — the module 3 rules, unchanged: "Wrong PIN", then "Invalid amount", then "Insufficient balance", then "Sent" after deducting
There is no setter for status and no accessor at all for pin. Both omissions are the point.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class BkashAccount {
    phone;
    pin;
    _balance;
    constructor(phone, pin, opening = 0) {
        this.phone = phone;
        this.pin = pin;
        this._balance = opening;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value >= 0) {
            this._balance = value;
        }
    }
    get status() {
        if (this._balance === 0)
            return "empty";
        if (this._balance < 100)
            return "low";
        return "fine";
    }
    cashIn(amount) {
        if (amount <= 0)
            return false;
        this._balance += amount;
        return true;
    }
    sendMoney(amount, pin) {
        if (pin !== this.pin)
            return "Wrong PIN";
        if (amount <= 0)
            return "Invalid amount";
        if (amount > this.balance)
            return "Insufficient balance";
        this._balance -= amount;
        return "Sent";
    }
}
//# sourceMappingURL=problem-6.js.map