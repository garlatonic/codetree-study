const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.


const dy = [-1, 0, 1, 0]; // U, R, D, L
const dx = [0, 1, 0, -1];

const dir = {
    N: 0,
    E: 1,
    S: 2,
    W: 3
}

let [x, y] = [0, 0];

let time = 0;
let isArrived = false;
for (const move of moves) {
    let [direction, distance] = move.split(" ");
    distance *= 1;
    for (let i = 0; i < distance; i++) {
        time++;
        x += dx[dir[direction]];
        y += dy[dir[direction]];

        if (x === 0 && y === 0) {
            isArrived = true;
            break;
        }
    }
    if(isArrived) break;
}

const answer = isArrived ? time : -1;
console.log(answer)