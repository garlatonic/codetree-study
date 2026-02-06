const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let minSum = Infinity;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let copy = [...arr];
        copy[i] *= 2;

        copy.splice(j, 1);
        let sum = 0;

        for (let k = 1; k < copy.length; k++) {
            sum += Math.abs(copy[k - 1] - copy[k]);
        }

        minSum = Math.min(sum, minSum);
    }
}

console.log(minSum)