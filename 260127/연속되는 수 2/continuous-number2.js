const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let count = 1;
let maxCount = 1;

for (let i = 1; i < n; i++) {
  if (arr[i] === arr[i - 1]) {
    count++;
  } else {
    maxCount = Math.max(maxCount, count);
    count = 1;
  }
}

maxCount = Math.max(maxCount, count);

console.log(maxCount);