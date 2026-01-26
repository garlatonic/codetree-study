const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const MAX_OFFSET = n * 10 * 2 + 1;
const arr = Array(MAX_OFFSET).fill(0);

let current = Math.floor(MAX_OFFSET / 2) + 1;
for (const command of commands) {
    const [m, d] = command.split(" ");
    if (d === "L") {
        for (let i = 0; i < Number(m); i++) {
            arr[current - i - 1] += 1;
        }
    } else {
        for (let i = 0; i < Number(m); i++) {
            arr[current + i] += 1;
        }
    }
    current = d === "L" ? current - Number(m) : current + Number(m);
}
console.log(arr.filter((el) => el > 1).length);