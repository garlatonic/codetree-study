const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.

let maxSum = 0;
for (let i = x; i <= y; i++) {
    let number = i;
    let sum = 0;

    while (true) {
        if (number < 10) {
            sum += number;
            break;
        }

        sum += number % 10;
        number = Math.floor(number / 10);
    }

    maxSum = Math.max(maxSum, sum);
}

console.log(maxSum)