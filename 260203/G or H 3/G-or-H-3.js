const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
    const [x, c] = input[i].split(' ');
    people.push([Number(x), c]);
}

// Please Write your code here.
const peopleArr = Array.from({ length: n }, () => "");
for (const [idx, alph] of people) {
    peopleArr[idx - 1] = alph;
}

let maxSum = 0;
for (let i = 0; i <= n - k; i++) {
    let tempSum = 0;
    for (let j = i; j < i + k + 1; j++) {
        if (peopleArr[j] === "G") tempSum += 1;
        else if (peopleArr[j] === "H") tempSum += 2;
    }
    maxSum = Math.max(maxSum, tempSum);
}

console.log(maxSum);