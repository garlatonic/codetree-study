const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const MAX_OFFSET = 101;
const arr = Array(MAX_OFFSET).fill(0);

let current = Math.floor(MAX_OFFSET / 2);
for (const command of commands) {
    const [m, d] = command.split(" ");
    const prev = d === "L" ? current : current - m;
    for (let i = prev; i < prev + Number(m); i++) {
        arr[i]++;
        current = i;
    }
}

console.log(arr.filter((el) => el > 1).length)