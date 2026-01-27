const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] !== arr[i]) count++
}

console.log(count)