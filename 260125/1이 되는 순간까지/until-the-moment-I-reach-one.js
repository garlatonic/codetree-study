const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let count = 0;
function f(num) {
    if (num === 1) return;

    count++;
    if (num % 2 === 0) {
        f(num / 2);
    } else {
        f(Math.floor(num / 3));
    }
}

f(n)
console.log(count)