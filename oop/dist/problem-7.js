"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    registration;
    wheels;
    constructor(registration, wheels) {
        this.registration = registration;
        this.wheels = wheels;
    }
    describe() {
        return `${this.registration} · ${this.wheels} wheels`;
    }
    fare(km) {
        return km * 10;
    }
}
class Rickshaw extends Vehicle {
    constructor(registration) {
        super(registration, 3);
    }
    fare(km) {
        return Math.max(20, km * 15);
    }
}
class CNG extends Vehicle {
    flagDown;
    constructor(registration, flagDown) {
        super(registration, 3);
        this.flagDown = flagDown;
    }
    fare(km) {
        return this.flagDown + (km * 12);
    }
}
class Bus extends Vehicle {
    stageRate;
    constructor(registration, stageRate) {
        super(registration, 6);
        this.stageRate = stageRate;
    }
    fare(stages) {
        return stages * this.stageRate;
    }
}
//# sourceMappingURL=problem-7.js.map