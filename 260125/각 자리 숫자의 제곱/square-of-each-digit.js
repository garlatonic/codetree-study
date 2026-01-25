const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

function solution(num) {
    if (num < 10) return num ** 2
    return solution(Math.floor(num / 10)) + (num % 10) ** 2
}

console.log(solution(n))