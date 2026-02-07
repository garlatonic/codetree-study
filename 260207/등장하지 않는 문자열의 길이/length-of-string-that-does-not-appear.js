const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let minLength = Infinity;

for (let j = 1; j < n; j++) {
    const split = string.slice(0, j + 1);
    const after = string.replaceAll(split, "");

    if (after.length + split.length < string.length) continue;
    minLength = Math.min(minLength, split.length);
}

console.log(minLength)