const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let count = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let sum = 0;
        for (let k = i; k < j + 1; k++) {
            sum += arr[k];
        }

        const average = sum / (j - i + 1);
        if (arr.slice(i, j + 1).includes(average)) count++;
    }
}

console.log(count);