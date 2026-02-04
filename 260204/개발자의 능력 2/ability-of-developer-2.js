const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// Please Write your code here.
arr.sort((a, b) => b - a);

const result = [];
for (let i = 0; i < 3; i++) {
    result.push([arr[i], arr[arr.length - 1 - i]]);
}

let min = Infinity;
let max = 0;

result.forEach(([a, b]) => {
    min = Math.min(min, a + b);
    max = Math.max(max, a + b);
})

console.log(max - min);