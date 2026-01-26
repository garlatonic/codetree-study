const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function formatBinary(n) {
    const result = [];

    while (n) {
        if (n < 2) {
            result.push(n);
            break;
        }

        result.push(n % 2);
        n = Math.floor(n / 2);
    }

    return result.reverse().join("");
}

console.log(formatBinary(n))