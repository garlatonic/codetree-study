const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.
const students = [...studentInputs].map((value, index) => ({
  h: value[0],
  w: value[1],
  k: index + 1
}))

students
  .sort((a, b) => {
    if (a.h === b.h) return b.w - a.w;
    return a.h - b.h;
  })
  .forEach((student) => {
    console.log(student.h, student.w, student.k)
  })