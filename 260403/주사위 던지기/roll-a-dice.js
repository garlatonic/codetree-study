const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, r, c] = input[0].split(" ").map(Number);
const directions = input[1].split(" ").map((direction) => direction.trim());

const dice = [
    [1, 6],
    [2, 5],
    [3, 4],
];
// 1 아래 2
// 1 우측 3

let cx = c - 1;
let cy = r - 1;

const grid = Array.from({ length: N }, () => Array(N).fill(0));
const dy = [0, 0, -1, 1]; // 동, 서, 북, 남
const dx = [1, -1, 0, 0]; // 동, 서, 북, 남
const directionMap = {
    R: 0,
    L: 1,
    U: 2,
    D: 3,
};

// 초기 위치에는 무조건 6
grid[cy][cx] = dice[0][1];

for (const direction of directions) {
    const ny = cy + dy[directionMap[direction]];
    const nx = cx + dx[directionMap[direction]];

    if (isRange(ny, nx)) {
        rollDice(direction);
        cy = ny;
        cx = nx;
        grid[cy][cx] = dice[0][1];
    }
}

const result = grid.flat().reduce((acc, cur) => acc + cur, 0);
console.log(result);

function rollDice(direction) {
    const [top, bottom] = dice[0];
    const [front, back] = dice[1];
    const [right, left] = dice[2];

    switch (direction) {
        case "R": // 동쪽
            dice[0] = [left, right];
            dice[2] = [top, bottom];
            break;
        case "L": // 서쪽
            dice[0] = [right, left];
            dice[2] = [bottom, top];
            break;
        case "U": // 북쪽
            dice[0] = [front, back];
            dice[1] = [bottom, top];
            break;
        case "D": // 남쪽
            dice[0] = [back, front];
            dice[1] = [top, bottom];
            break;
    }
}

// 격자 밖을 나가지 않게끔 확인
function isRange(y, x) {
    return 0 <= y && y < N && 0 <= x && x < N;
}
