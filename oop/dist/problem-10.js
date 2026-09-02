"use strict";
// problem
/*
The courier network
interface Deliverable

readonly courierName: string
accept(parcelId: string): string
chargeFor(district: string): number
interface Trackable

track(code: string): string
Pathao implements Deliverable, Trackable

courierName is "Pathao"
accept("991") → "PTH-991"
chargeFor → 60 for "Dhaka", 120 otherwise
track("PTH-991") → "PTH-991: on a bike"
RedX implements Deliverable

courierName is "RedX"
accept("991") → "RDX-991"
chargeFor → 70 for "Dhaka", 110 otherwise
Also write a standalone function cheapest(couriers: Deliverable[], district: string): string returning the courierName of whichever charges least. On a tie, the earlier one in the array wins.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Pathao {
    courierName = "Pathao";
    accept(parcelId) {
        return `PTH-${parcelId}`;
    }
    chargeFor(district) {
        return district === "Dhaka" ? 60 : 120;
    }
    track(code) {
        return `${code}: on a bike`;
    }
}
class RedX {
    courierName = "RedX";
    accept(parcelId) {
        return `RDX-${parcelId}`;
    }
    chargeFor(district) {
        return district === "Dhaka" ? 70 : 110;
    }
}
const cheapest = (couriers, district) => {
    let cheapCourierCharge = 0;
    let cheapCourier = "";
    for (let c of couriers) {
        if (cheapCourierCharge === 0) {
            cheapCourierCharge = c.chargeFor(district);
            cheapCourier = c.courierName;
        }
        if (c.chargeFor(district) > cheapCourierCharge) {
            cheapCourier = `${c.courierName}`;
        }
    }
    return `${cheapCourier}`;
};
//# sourceMappingURL=problem-10.js.map