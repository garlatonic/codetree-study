const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let maxSum = -1;

function isCarry(x, y, z) {
    let a = x, b = y, c = z;
    let result = false;

    while (!result) {
        if (a === 0 && b === 0 && c === 0) break;

        if(Math.floor(a % 10) + Math.floor(b % 10) + Math.floor(c % 10)>= 10) result = true;

        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        c = Math.floor(c / 10);
    }

    return result;
}

for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            // 중복이면 건너뛰기
            if (i === k || i === k || j === k) continue;
            if(isCarry(arr[i], arr[j], arr[k])) continue;

            maxSum = Math.max(maxSum, arr[i] + arr[j] + arr[k]);
        }
    }
}

console.log(maxSum)