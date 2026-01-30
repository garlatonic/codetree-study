const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const answer = [];
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if ((i < j && j < k) && (arr[i] <= arr[j] && arr[j] <= arr[k])) answer.push([i, j, k]);
        }
    }
}

console.log(answer.length)