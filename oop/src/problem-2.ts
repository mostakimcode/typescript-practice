//problem 
/*
Rescue the garage ledger

The garage keeps every rickshaw as loose variables — plate1, driver1, rent1, plate2, and so on. Give each rickshaw a file instead. No classes, no arrays.

Declare a type Rickshaw with plate: string, driver: string, rent: number.

Create r101 — "R-101", "Kamal", 180 — and r102 — "R-102", "Jashim", 200. Both typed Rickshaw.

Write describe(r) returning exactly "R-101 (Kamal)" for r101.

Write weeklyRent(r) returning that rickshaw's rent for seven days.

Write transfer(r, newDriver) that changes that rickshaw's driver. It returns nothing, and must not touch any other rickshaw.

Write cheaper(a, b) returning the plate of whichever costs less per day. On a tie, return a's plate.

Notice what every function has in common: it takes a whole rickshaw, never a loose value. That is the point of the exercise.
*/

type Rickshaw ={
    plate: string,
    driver: string,
    rent: number
}


const r101: Rickshaw = {
    plate: "R-101",
    driver: "Kamal",
    rent: 180
}


const r102: Rickshaw = {
    plate: "R-102",
    driver: "Jashim",
    rent: 200
}


const describe = (r:Rickshaw) =>{
    return `${r.plate} (${r.driver})`
}


const weeklyRent =(r: Rickshaw) =>{
    return r.rent * 7;
}


const transfer = (r: Rickshaw, newDriver:string) =>{
    r.driver = newDriver;
}

const cheaper = (a:Rickshaw,b:Rickshaw) =>{
    return a.rent <= b.rent? a.plate : b.plate;
}