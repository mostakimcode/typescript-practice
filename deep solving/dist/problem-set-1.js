"use strict";
// Problem-01
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    return age >= 60 ? 120 : age >= 13 ? 200 : age >= 5 ? 100 : 0;
}
// problem 02
function getStockStatus(stock) {
    return stock > 20 ? "In Stock" : stock > 5 ? "Available" : stock > 0 ? "Almost Sold out" : "Out of Stock";
}
function formatUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}
function calculateCartTotal(products) {
    return products.reduce((total, product) => {
        return total += product.price;
    }, 0);
}
function getStudentResult(student) {
    const { name } = student;
    let total = student.marks.reduce((total, mark) => {
        return total += mark;
    });
    let avg = total / student.marks.length;
    let finalResult = avg >= 40 ? "Passed" : "Failed";
    return { name, average: avg, result: finalResult };
}
function canEdit(role) {
    return role === "admin" || role === "editor";
}
function findProducts(products, category) {
    let finalProductNames = [];
    let finalProducts = products.filter((product) => {
        return product.category === category;
    });
    for (let product of finalProducts) {
        finalProductNames.push(product.name);
    }
    return finalProductNames.join(" and ");
}
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
function getPatientStatus(patient) {
    if (patient.type === "general")
        return `General patient`;
    return patient.emergencyLevel === 1 ? `Critical patient` : patient.emergencyLevel === 2 ? `Serious patient` : `Moderate patient`;
}
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        balance += transaction.amount;
        return `amount deposited`;
    }
    else {
        if (balance < transaction.amount) {
            return `insufficient balance`;
        }
        balance -= transaction.amount;
        return `withdrawal complete`;
    }
};
//# sourceMappingURL=problem-set-1.js.map