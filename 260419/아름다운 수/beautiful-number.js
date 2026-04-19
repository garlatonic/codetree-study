const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const number = [];
let answer = 0;

function beautifulNumber(pos) {
    if (number.length === n) {
        if (isBeautiful(number)) {
            answer += 1;
        }
        return;
    }

    for (let i = 1; i <= 4; i++) {
        number.push(i);
        beautifulNumber();
        number.pop();
    }
}

function isBeautiful(arr) {
    let idx = 0;
    while (idx < n) {
        const curr = arr[idx];
        let count = 0;
        while (idx < n && curr === arr[idx]) {
            count += 1;
            idx += 1;
        }

        if (count % curr !== 0) return false;
    }
    return true;
}

beautifulNumber();
console.log(answer);