const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

let count = 0;
for (let i = 1; i < A.length - 2; i++) {
    if (A[i - 1] !== "(" || A[i] !== "(") continue;

    for (let j = i + 2; j < A.length; j++) {
        if(A[j - 1] !== ")" || A[j] !== ")") continue;
        count++;
    }
}

console.log(count)