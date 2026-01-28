const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

let rotateD = 0;

let x = Math.floor(n / 2);
let y = Math.floor(n / 2);

let sum = board[y][x];

for (const command of commands) {
    if (command === "L") rotateD = (rotateD + 3) % 4;
    else if (command === "R") rotateD = (rotateD + 1) % 4;
    else {
        let nx = x + dx[rotateD];
        let ny = y + dy[rotateD];

        if (isRange(nx, ny)) {
            x = nx;
            y = ny;
            sum += board[y][x];
        }
    }
}

console.log(sum);

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}