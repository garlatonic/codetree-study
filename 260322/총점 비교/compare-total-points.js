const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1).map((el) => el.trim().split(" "));

// Please Write your code here.
rawStudentData.sort((a, b) => {
    const sumA = a.slice(1).map(Number).reduce((acc, cur) => acc + cur, 0);
    const sumB = b.slice(1).map(Number).reduce((acc, cur) => acc + cur, 0);

    return sumA - sumB;
})

console.log(rawStudentData.map((data) => data.join(" ")).join("\n"));