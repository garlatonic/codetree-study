const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
function isMax(n, arr) {
    if (n === 0) return arr[n];

    return Math.max(isMax(n - 1, arr), arr[n])
}

console.log(isMax(n - 1, arr))