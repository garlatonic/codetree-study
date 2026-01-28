const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
const dx = [1, -1, 0, 0]; // E W S N
const dy = [0, 0, -1, 1];

let [x, y] = [0, 0];
for (const move of moves) {
    const [direction, distance] = move.split(" ");
    let [nx, ny] = [Number(distance), Number(distance)];

    if (direction === "N") {
        [nx, ny] = [x + nx * dx[3], y + ny * dy[3]];
    } else if (direction === "S") {
        [nx, ny] = [x + nx * dx[2], y + ny * dy[2]];
    } else if (direction === "W") {
        [nx, ny] = [x + nx * dx[1], y + ny * dy[1]];
    } else {
        [nx, ny] = [x + nx * dx[0], y + ny * dy[0]];
    }
    [x, y] = [nx, ny];
}

console.log(x, y)