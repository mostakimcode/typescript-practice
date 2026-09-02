//problem
/*
Lock down the account

Build a BkashAccount that cannot be tampered with from outside.

public readonly phone: string
private pin: string
private balance: number
Constructor takes phone, pin, opening in that order
getBalance(): number — returns the balance
sendMoney(amount: number, pin: string): string — returns exactly:
"Wrong PIN" if the PIN does not match
"Invalid amount" if the amount is zero or negative
"Insufficient balance" if the amount is more than the balance
"Sent" on success, after deducting
Check the PIN first — a wrong PIN should never reveal whether the balance was enough.
*/

class BkashAccount {
    public readonly phone: string
    private pin: string
    private balance: number

    constructor(phone: string, pin: string, opening: number){
        this.phone = phone;
        this.pin = pin;
        this.balance = opening;
    }

    getBalance(): number{
        return this.balance
    }

    sendMoney(amount: number, pin: string): string{
        if(pin !== this.pin) return "Wrong PIN"
        if(amount <= 0) return "Invalid amount"
        if(amount > this.balance) return "Insufficient balance"

        this.balance -= amount;
        return "Sent"
    }
    
}