const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function f(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return n + f(n - 2);
}

console.log(f(n))