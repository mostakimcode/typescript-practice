"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printUser = (name, age) => {
    return `${name} is ${age} years old.`;
};
// console.log(printUser('hira', 29));
let name = 'Laptop';
let price = 45000;
let isAvailable = true;
// console.log(`${name} costs ${price} BDT and is available: $${isAvailable}`)
const calculateTotalStudents = (students) => {
    return `Total students: ${students.length}`;
};
// console.log(calculateTotalStudents(['riya','jiya','piya','miya']));
const info = (user) => {
    return `${user[0]} is ${user[1]} years old`;
};
// console.log(info(['riya', 27]));
const profileOf = (user) => {
    let { name, email } = user;
    if (!Object.hasOwn(user, 'email')) {
        email = 'Not Provided';
    }
    return `Name: ${name}, Email: ${email}`;
};
// console.log(profileOf({name:'riya', email: 'alalalal@gmail.com'}));
const isEven = (num) => {
    return num % 2 === 0;
};
// console.log(isEven(7));
const sumAll = (...nums) => {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
};
// console.log(sumAll(1,2));
const merge = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
// console.log(merge([1,2,3], [2,3,4]));
const numStatus = (num) => {
    return num > 0 ? 'Positive' : 'Negative';
};
// console.log(numStatus(-5));
const justName = (name = 'guest') => {
    return `${name}`;
};
// console.log(justName(undefined));
const print = (word) => {
    if (typeof word === 'string') {
        return word;
    }
};
// console.log(print('hhfg'));
const fullObject = ({ name, age, email, skills, isActive }) => {
    return {
        Name: name,
        age: age,
        email: email,
        skills: skills.join(', '),
        'Active Status': isActive
    };
};
// console.log(fullObject({name: 'riya', age: 27, email: 'lalal@ashd.com', skills: ['readin', 'typing','gaming'], isActive: true}));
//# sourceMappingURL=problems.js.map