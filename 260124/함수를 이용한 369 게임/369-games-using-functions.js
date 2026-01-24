const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
// 3, 6, 9 포함인지
function isTSN0(num) {
    return num.toString().split("").some((el) => {
        const digit = el * 1;
        return digit !== 0 && digit % 3 === 0;
    });
}
// 3의 배수인지
function isTNum(num) {
    return num % 3 === 0
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (isTSN0(i) || isTNum(i)) count++;
}

console.log(count)