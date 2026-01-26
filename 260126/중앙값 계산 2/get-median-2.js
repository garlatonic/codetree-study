const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function printMid(arr) {
    const copy = [...arr];
    return copy.sort((a, b) => a - b)[parseInt(copy.length / 2)];
}

const answer = [];
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        const mid = printMid(arr.slice(0, i + 1));
        answer.push(mid);
    }
}

console.log(answer.join(" "))