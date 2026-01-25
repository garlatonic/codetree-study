const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function solution(num) {
    let sum = 0;
    let m = num;

    while (m >= 1) {
        sum += A[m - 1];
        if (m === 1) break;

        if (m % 2 === 0) {
            m /= 2;
        } else {
            m -= 1;
        }
    }

    return sum;
}

console.log(solution(m))