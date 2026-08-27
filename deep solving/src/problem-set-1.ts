// Problem-01

function getTicketPrice(age: number): number {
    return age >= 60 ? 120 : age >= 13 ? 200 : age >= 5 ? 100 : 0;
}


// problem 02


function getStockStatus(stock: number): string {

    return stock > 20 ? "In Stock" : stock > 5 ? "Available" : stock > 0 ? "Almost Sold out" : "Out of Stock";

}


//problem 03

interface User1 {
    name: string,
    age: number,
    city: string
}


function formatUserProfile(user: User1): string {
    return `${user.name} is ${user.age} years old and lives in ${user.city}`
}


//problem 04

interface Product {
    name: string,
    price: number
}


function calculateCartTotal(products: Product[]): number {

    return products.reduce((total, product) => {
        return total += product.price
    }, 0)

}


//problem 05

interface Student {
    name: string,
    marks: number[]
}

interface StudentNew {
    name: string,
    average: number,
    result: string
}
function getStudentResult(student: Student): StudentNew {
    const { name } = student
    let total = student.marks.reduce((total, mark) => {
        return total += mark
    })
    let avg = total / student.marks.length;
    let finalResult = avg >= 40 ? "Passed" : "Failed"
    return { name, average: avg, result: finalResult }
}



//problem 06

type Role = "admin" | "editor" | "viewer"

function canEdit(role: Role): boolean {
    return role === "admin" || role === "editor"
}


//problem 07


interface Product {
    name: string,
    price: number,
    category: string
}
function findProducts(products: Product[], category: string): string {
    let finalProductNames = []
    let finalProducts = products.filter((product) => {
        return product.category === category
    })
    for (let product of finalProducts) {
        finalProductNames.push(product.name)
    }
    return finalProductNames.join(" and ")

}
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];

// console.log(findProducts(products, "laptop"));


//problem 08 


interface GeneralPatient {
    name: string,
    age: number,
    type: "general"
}

interface EmergencyPatient {
    name: string,
    age: number,
    type: "emergency"
    emergencyLevel: number
}
function getPatientStatus(patient: GeneralPatient | EmergencyPatient): string {
    if (patient.type === "general") return `General patient`
    return patient.emergencyLevel === 1 ? `Critical patient` : patient.emergencyLevel === 2 ? `Serious patient` : `Moderate patient`
}


//problem -09

type Deposit = {
    type: "deposit",
    amount: number
}
type Withdrawal = {
    type: "withdraw",
    amount: number
}

const processTransaction = (balance: number, transaction: Deposit | Withdrawal): string => {
    if (transaction.type === "deposit") {
        balance += transaction.amount
        return `amount deposited`
    } else {
        if (balance < transaction.amount) {
            return `insufficient balance`
        }
        balance -= transaction.amount
        return `withdrawal complete`
    }

}