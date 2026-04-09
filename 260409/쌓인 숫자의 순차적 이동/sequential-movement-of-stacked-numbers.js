const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const moveNums = input[1 + n].trim().split(' ').map(Number);

// Please Write your code here.
const dy = [1, 1, 1, 0, -1, -1, -1, 0];
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

const board = Array.from({ length: n }, () => Array.from({ length: n }, () => []));
for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
        board[r][c].push(grid[r][c]);
    }
}

for (const moveNum of moveNums) {
    const [y, x] = findNum(moveNum);

    let maxNum = 0;
    let dir = -1;

    for (let d = 0; d < 8; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (!inRange(ny, nx)) continue;
        // 해당 칸에 큰 값이 있는지 확인
        if (maxNum < Math.max(...board[ny][nx])) {
            maxNum = Math.max(...board[ny][nx]);
            dir = d;
        }
    }

    // 주변에 아무것도 없으면 
    if (dir === -1) continue;

    const ny = y + dy[dir];
    const nx = x + dx[dir];

    const index = board[y][x].indexOf(moveNum);
    const arr = board[y][x].splice(index);

    board[ny][nx].push(...arr);
}

board.forEach((row) => {
    row.forEach((col) => {
        if (!col.length) console.log("None");
        else console.log([...col].reverse().join(" "));
    })
})

function findNum(num) {
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c].includes(num)) return [r, c];
        }
    }
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}