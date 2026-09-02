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


interface Deliverable {
  readonly courierName: string;
  accept(parcelId: string): string;
  chargeFor(district: string): number;
}

interface Trackable {
  track(code: string): string;
}

class Pathao implements Deliverable, Trackable {
  readonly courierName = "Pathao";

  accept(parcelId: string): string {
    return `PTH-${parcelId}`;
  }

  chargeFor(district: string): number {
    return district === "Dhaka" ? 60 : 120;
  }

  track(code: string): string {
    return `${code}: on a bike`;
  }
}

class RedX implements Deliverable {
  readonly courierName = "RedX";

  accept(parcelId: string): string {
    return `RDX-${parcelId}`;
  }

  chargeFor(district: string): number {
    return district === "Dhaka" ? 70 : 110;
  }
}
const cheapest = (couriers: Deliverable[], district: string): string =>{
    let cheapCourierCharge = 0;
    let cheapCourier = ""
    for(let c of couriers){
        if(cheapCourierCharge === 0){
            cheapCourierCharge = c.chargeFor(district)
            cheapCourier = c.courierName
        }
        if(c.chargeFor(district) > cheapCourierCharge){
            cheapCourier = `${c.courierName}`
        }
    }
    return `${cheapCourier}`
}


