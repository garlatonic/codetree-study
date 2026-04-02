const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, currY, currX] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
currX--;
currY--;

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const route = [grid[currY][currX]];

while (true) {
    let isMoved = false;
    for (let d = 0; d < 4; d++) {
        const nextY = currY + dy[d];
        const nextX = currX + dx[d];

        if (isRange(nextY, nextX) && grid[nextY][nextX] > grid[currY][currX]) {
            currY = nextY;
            currX = nextX;
            route.push(grid[currY][currX]);
            isMoved = true;
            break;
        }
    }

    if(!isMoved) break;
}

console.log(route.join(" "));

function isRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}