const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function fivo(n) {
    if(n === 1) {
        return 1;
    }
    if(n === 2) {
        return 1;
    }

    return fivo(n - 1) + fivo(n - 2);
}

console.log(fivo(n))