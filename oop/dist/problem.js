"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rafi = {
    name: "Rafi",
    roll: 27,
    batch: "B14",
    marks: 78,
    present: true
};
const sadia = {
    name: "Sadia",
    roll: 31,
    batch: "B14",
    marks: 91,
    present: true
};
const students = [rafi, sadia];
const describe = (Student) => {
    return Student.name + ` (${Student.roll})` + " scored " + Student.marks;
};
const topper = (members) => {
    let highestMarksStudent = null;
    let highestMarks = 0;
    for (let member of members) {
        if (member.marks > highestMarks) {
            highestMarksStudent = member;
            highestMarks = member.marks;
        }
    }
    return highestMarksStudent?.name;
};
const classAverage = (members) => {
    let totalMarks = 0;
    let count = 0;
    for (let member of members) {
        totalMarks += member.marks;
        count++;
    }
    let avg = totalMarks / count;
    return Math.round(avg);
};
// console.log(topper(students))
// console.log(describe(sadia));
console.log(classAverage(students));
//# sourceMappingURL=problem.js.map