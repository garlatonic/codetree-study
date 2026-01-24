const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % temp;
        a = temp;
    }

    return a;
}

console.log(gcd(n, m));