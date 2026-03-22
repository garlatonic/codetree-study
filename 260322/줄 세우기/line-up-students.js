const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' ').map(Number));

// Please write your code here.
class Student {
    constructor(number, height, weight) {
        this.number = number;
        this.height = height;
        this.weight = weight;
    }
}

const students = [];
for (let i = 0; i < n; i++) {
    const [h, w] = studentData[i];
    students.push(new Student(i + 1, h, w));
}

students.sort((a, b) => {
    if (a.height !== b.height) return b.height - a.height;
    if (a.weight !== b.weight) return b.weight - a.weight;
    return a.number - b.number;
})

students.forEach((student) => {
    console.log(student.height, student.weight, student.number);
})