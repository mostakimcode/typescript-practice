"use strict";
// problem
/*
Build the student folder
No classes yet — objects and plain functions only.

Create an object rafi with exactly these properties: name "Rafi", roll 27, batch "B14", marks 78, present true.

Create a second object sadia: "Sadia", 31, "B14", 91, true.

Create an array students holding rafi then sadia.

Write describe(s) taking one student object and returning "Rafi (27) scored 78".

Write topper(list) taking an array of students and returning the name of whoever has the highest marks. On a tie, the earlier one wins.

Write classAverage(list) returning the average of marks, rounded with Math.round.
*/
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
// console.log(classAverage(students));
//# sourceMappingURL=problem-1.js.map