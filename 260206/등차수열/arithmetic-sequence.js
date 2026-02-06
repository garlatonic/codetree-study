const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let maxCount = 0;
for (let k = 1; k <= 100; k++) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i === j) continue;

            const ai = arr[i];
            const aj = arr[j];

            if(aj - k === k - ai) count++;
        }
    }
    maxCount = Math.max(count, maxCount);
}

console.log(maxCount)