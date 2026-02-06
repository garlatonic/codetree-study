const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let maxCount = 0;
for (let i = 1; i <= 3; i++) {
    let cup = [1, 2, 3];
    let count = 0;

    for (let j = 0; j < n; j++) {
        const [a, b, c] = commands[j];

        [cup[a - 1], cup[b - 1]] = [cup[b - 1], cup[a - 1]];
        if (cup[c - 1] === i) count++;
    }

    maxCount = Math.max(maxCount, count);
}

console.log(maxCount)