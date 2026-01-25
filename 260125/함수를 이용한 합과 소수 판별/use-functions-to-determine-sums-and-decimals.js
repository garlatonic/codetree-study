const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isSumEven(num) {
    const numArr = num.toString().split("").map(Number);
    return numArr.reduce((acc, cur) => acc += cur, 0) % 2 === 0;
}
function isSosu(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (isSumEven(i) && isSosu(i)) {
        count++;
    }
}

console.log(count)
