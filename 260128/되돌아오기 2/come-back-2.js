const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let x = 0, y = 0;
let rotate = 0;

let time = 0;
let isArrived = false;
for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    let nx = x + dx[rotate];
    let ny = y + dy[rotate];

    if (command === "F") {
        x = nx;
        y = ny;
    } else if (command === "R") {
        rotate = (rotate + 1) % 4;
    } else {
        rotate = (rotate + 3) % 4;
    }

    time++;
    if (x === 0 && y === 0) {
        isArrived = true;
        break;
    };
}

const answer = isArrived ? time : -1;
console.log(answer)