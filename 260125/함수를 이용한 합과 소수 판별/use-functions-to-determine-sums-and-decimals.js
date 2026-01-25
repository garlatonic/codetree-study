const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isAllEven(num) {
    const numStr = num.toString().split("");
    return numStr.length === numStr.filter((num) => num * 1 !== 0 && num % 2 === 0).length;
}

let count = 0;
for (let i = A; i <= B; i++) {
    if (isAllEven(i)) {
        count++;
    }
}

console.log(count)
