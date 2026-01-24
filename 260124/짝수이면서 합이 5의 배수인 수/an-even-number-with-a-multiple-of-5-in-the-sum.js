const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function isMagicNumber(n) {
    // 짝수 체크
    if (n % 2 !== 0) return "No";

    // 각 자리 숫자의 합이 5의 배수?
    const [t, o] = n.toString().split("").map(Number);
    if ((t + o) % 5 !== 0) return "No";

    return "Yes";
}

console.log(isMagicNumber(n))