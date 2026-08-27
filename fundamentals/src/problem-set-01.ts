export {};

const printUser = (name: string, age: number): string =>{
    return `${name} is ${age} years old.`
}

// console.log(printUser('hira', 29));



let name: string = 'Laptop';
let price: number = 45000;
let isAvailable: boolean = true;

// console.log(`${name} costs ${price} BDT and is available: $${isAvailable}`)



const calculateTotalStudents = (students: string[]):string =>{
    return `Total students: ${students.length}`
}

// console.log(calculateTotalStudents(['riya','jiya','piya','miya']));


const info = (user:[string,number]):string =>{
    return `${user[0]} is ${user[1]} years old`
}

// console.log(info(['riya', 27]));


const profileOf =(user:{
    name: string,
    email?: string
}): string =>{
    let {name, email} = user;
    if(!Object.hasOwn(user, 'email')){
        email = 'Not Provided'
    }
    return `Name: ${name}, Email: ${email}`
}

// console.log(profileOf({name:'riya', email: 'alalalal@gmail.com'}));


const isEven = (num:number): boolean =>{
    return num%2 === 0;
}

// console.log(isEven(7));



const sumAll =(...nums: number[]): number =>{
    let total =0;
    for(let num of nums){
        total += num;
    }
    return total;
}

// console.log(sumAll(1,2));



const merge = (arr1: number[], arr2: number[]): number[] =>{
    return [...arr1, ...arr2]
}


// console.log(merge([1,2,3], [2,3,4]));



const numStatus =(num:number):string =>{
    return num >0? 'Positive' : 'Negative'
}


// console.log(numStatus(-5));



const justName =(name: string | undefined = 'guest') =>{
    return `${name}`
}


// console.log(justName(undefined));




const print =(word: unknown) =>{
    if(typeof word === 'string'){
        return word
    }
}


// console.log(print('hhfg'));



const fullObject = ({name,age,email,skills,isActive}: {name: string, age: number, email: string, skills: string[], isActive: boolean}) =>{
    return {
        Name: name,
        age: age,
        email: email,
        skills: skills.join(', '),
        'Active Status': isActive
    }
}


// console.log(fullObject({name: 'riya', age: 27, email: 'lalal@ashd.com', skills: ['readin', 'typing','gaming'], isActive: true}));


