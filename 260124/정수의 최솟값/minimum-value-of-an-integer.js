const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
const func = (a, b, c) => {
    return Math.min(a, b, c);
}

console.log(func(a, b, c))