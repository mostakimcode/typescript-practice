//problme
/*
The fleet
Build a small vehicle hierarchy.

Vehicle

public registration: string, protected wheels: number
describe(): string — returns "DHK-1 · 4 wheels" for registration DHK-1 and 4 wheels
fare(km: number): number — km * 10
Rickshaw extends Vehicle

Constructor takes only registration; wheels are always 3
fare(km: number): number — km * 15, but never below 20
CNG extends Vehicle

Constructor takes registration and flagDown: number; wheels are always 3
fare(km: number): number — flagDown + km * 12
Bus extends Vehicle

Constructor takes registration and stageRate: number; wheels are always 6
fare(stages: number): number — stages * stageRate
None of the three subclasses should redefine describe().
*/

class Vehicle{
    constructor (public registration: string, protected wheels: number) {}

    describe(): string {
        return `${this.registration} · ${this.wheels} wheels`
    }

    fare(km: number): number{
        return km * 10;
    }
}

class Rickshaw extends Vehicle {
    constructor(registration: string){
        super(registration, 3);
    }

    fare(km: number): number{
        return Math.max(20, km * 15);
    }
}

class CNG extends Vehicle{
    constructor(registration: string, private flagDown: number){
        super(registration, 3)
    }

    fare(km: number): number{
        return this.flagDown + (km * 12);
    }
}


class Bus extends Vehicle{
    constructor(registration: string, private stageRate: number ){
        super(registration, 6)
    }

    fare(stages: number): number{
        return stages * this.stageRate;
    }
}