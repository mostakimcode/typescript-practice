// problem
/*
Build the student card

Write a Student class for a coaching centre. Fields and a constructor only — no methods yet.

Requirements:

Fields name: string, roll: number, bloodGroup: string
A field batch: string, filled from a constructor parameter that defaults to "B14"
A field active: boolean that is not a parameter and always starts as true
A constructor taking name, roll, bloodGroup, batch in that order, assigning each with this.
*/

class Student {
    name: string
    roll: number
    bloodGroup: string
    batch: string
    active: boolean = true


    constructor(name:string, roll:number, bloodGroup:string, batch:string = "B14"){
        this.name = name;
        this.roll = roll;
        this.bloodGroup = bloodGroup;
        this.batch = batch;
    }
}