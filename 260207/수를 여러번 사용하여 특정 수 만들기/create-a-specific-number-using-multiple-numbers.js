const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
// Please Write your code here.

let maxResult = 0;
for (let i = 0; i <= c / a; i++) {
    for (let j = 0; j <= c / b; j++) {
        const result = a * i + b * j;
        if(result <= c) maxResult = Math.max(maxResult, result)
    }
}
console.log(maxResult)