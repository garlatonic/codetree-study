const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const board = input.slice(1).map((line) => line.trim().split(" ").map(Number));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

const startPoints = [];
for (let i = 0; i < N; i++) {
    startPoints.push([i, -1, 0]);
    startPoints.push([i, N, 2]);
    startPoints.push([-1, i, 1]);
    startPoints.push([N, i, 3]);
}

let maxTime = 0;
for (const [y, x, direction] of startPoints) {
    const time = pinball(y, x, direction);
    maxTime = Math.max(maxTime, time);
}

console.log(maxTime);

function pinball(y, x, direction) {
    let time = 0;
    while (true) {
        time++;

        y += dy[direction];
        x += dx[direction];
        if (!isValid(y, x)) {
            break;
        }
        if (board[y][x] === 1) {
            if (direction === 0)
                direction = 3; // 오른쪽 -> 위
            else if (direction === 1)
                direction = 2; // 아래 -> 왼쪽
            else if (direction === 2)
                direction = 1; // 왼쪽 -> 아래
            else if (direction === 3) direction = 0; // 위 -> 오른쪽
        } else if (board[y][x] === 2) {
            if (direction === 0)
                direction = 1; // 오른쪽 -> 아래
            else if (direction === 1)
                direction = 0; // 아래 -> 오른쪽
            else if (direction === 2)
                direction = 3; // 왼쪽 -> 위
            else if (direction === 3) direction = 2; // 위 -> 왼쪽
        }
    }
    return time;
}

function isValid(y, x) {
    return 0 <= y && y < N && 0 <= x && x < N;
}
