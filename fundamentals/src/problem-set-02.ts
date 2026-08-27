 // Problem-01

 
 let val: unknown = "Hello TypeScript";
 let value1 = val as string;
 console.log(value1.length);

 const showValue = <T extends string>(val:T) =>{
    return val.length;
 }

console.log(showValue<string>("Hello Typescript"))



// Problem-02


let value2: string | number = "100";

if(typeof value2 === "string"){
   console.log(parseFloat(value2) + 10);
} else{console.log(value2 + 10);}


let value3 = ("100" as unknown) as number;

// the risk is the input could not be number always.. So for now, there is no error. But,  if the input is not a number then the final output would not like what we expect.



// problem-03


interface Product {
   title: string,
   price: number,
   inStock?: boolean
}

const priceOfProduct = ({price}: Product): void =>{
   console.log(price);
}

priceOfProduct( { title: "Laptop", price: 55000 })
priceOfProduct({ title: "Mouse", price: 500, inStock: true })



// Problem -04


type PaymentMethod = "cash" | "card" | "mobile";

interface Order {
   id: number,
   method: PaymentMethod
}

let method: PaymentMethod = "card";

let userOrder: Order = {
   id: 12,
   method: method
}

console.log(userOrder);



//Problem- 05


const getLastElement = <T>(array: T[]):T | undefined =>{
   return array[array.length -1]
}

console.log(getLastElement<number>([10, 20, 30]));
console.log(getLastElement<string>(["a", "b", "c"]));


//Problem -06


interface Container<T> {
   item: T
}

const container1: Container<number> ={
   item: 100
}

const container2: Container<string> ={
   item: "Books"
}

console.log("Container<number> =", container1);
console.log("COntainer<string> =", container2);



//Problem-07


interface HasId {
   id: number
}


const findById =<T extends HasId>(items:T[], id:number): T | undefined =>{
   return items.find(item => item.id === id)
}


console.log(findById([{id: 3, name: "A" }, { id: 2, name: "B" }], 1));

// so the error when i not using the id property is: object literal may only specify known properties and 'name' does not esist in type 'HasID.



//Problem -08


enum OrderStatus{
   Placed ="placed",
   Shipped = "shipped",
   Delivered = "delivered",
   Cancelled = "cancelled"
}

const showStatus = (status: OrderStatus): string =>{
   return `Current status: ${status.toUpperCase()}`
}

console.log(showStatus(OrderStatus.Shipped));
console.log(showStatus(OrderStatus.Delivered));




//Problem -09


const appConfig ={
   theme: "dark",
   version: 2
} as const;

// appConfig.theme = "light"    //Cannot assign a 'theme' because it is a read-only property.

const colors =['red', 'green', 'silver'] as const;
type color = typeof colors[number];



//Problem -10


interface Employee {
   name: string,
   id: number,
   salary: number,
   department: string
}


const updateEmployee = (data: Partial<Employee>): void =>{
   console.log(data);
}

type pick = Pick<Employee, 'name' | 'id'>
type omit = Omit<Employee, 'salary'>
