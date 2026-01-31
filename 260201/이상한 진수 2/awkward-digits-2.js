const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
let max = parseInt(a, 2);

for(let i = 0; i < a.length; i++) {
    let temp = [...a];
    temp[i] = 1;

    max = Math.max(parseInt(temp.join(""), 2), max);
}

console.log(max)