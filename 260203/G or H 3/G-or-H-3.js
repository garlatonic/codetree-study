const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
    const [x, c] = input[i].split(' ');
    people.push([Number(x), c]);
}

// Please Write your code here.
people.sort((a, b) => a[0] - b[0]);
let maxSum = 0;
for (let i = 0; i < n; i++) {
    let tempSum = 0;

    for (let j = i; j < n; j++) {
        if (people[j][0] - people[i][0] <= k) {
            tempSum = people[j][1] === "G" ? tempSum + 1 : tempSum + 2;
            maxSum = Math.max(tempSum, maxSum);
        } else {
            break;
        }
    }
}

console.log(maxSum)