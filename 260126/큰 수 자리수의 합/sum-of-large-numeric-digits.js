const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function f(n) {
    if(n < 10) return n;

    return parseInt(n % 10) + f(parseInt(n / 10));
}

console.log(f(a * b * c))