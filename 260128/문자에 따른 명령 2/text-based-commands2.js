const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let [x, y] = [0, 0];

let dirNum = 0; // 현재 북쪽

for (const command of commands) {
    if (command === "L") dirNum = (dirNum + 3) % 4;
    else if (command === "R") dirNum = (dirNum + 1) % 4;
    else {
        x += dx[dirNum];
        y += dy[dirNum];
    }
}

console.log(x, y)