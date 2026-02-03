const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.
const MAX_FEATURE = 1000000;
let minFeat = MAX_FEATURE;

const sum = arr.reduce((acc, cur) => acc + cur, 0);

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        for (let k = j + 1; k < 6; k++) {
            const sum1 = arr[i] + arr[j] + arr[k];
            const sum2 = sum - sum1;

            const diff = Math.abs(sum1 - sum2);
            minFeat = Math.min(minFeat, diff)
        }
    }
}

console.log(minFeat)