const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input
    .slice(1, n + 1)
    .map((line) => line.trim().split(" ").map(Number));

// Please write your code here.
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let maxCount = 0;
for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
        const board = structuredClone(grid);

        const power = board[r][c];
        board[r][c] = 0;
        for (let d = 1; d < power; d++) {
            if (r - d >= 0) board[r - d][c] = 0;
            if (r + d < n) board[r + d][c] = 0;
            if (c - d >= 0) board[r][c - d] = 0;
            if (c + d < n) board[r][c + d] = 0;
        }

        const result = gravity(board);

        // 동일한 쌍의 수 구하기
        let count = 0;
        for (let y = 0; y < n; y++) {
            for (let x = 0; x < n; x++) {
                const cur = result[y][x];
                if (result[y][x] === 0) continue;

                for (let d = 0; d < 4; d++) {
                    const ny = y + dy[d];
                    const nx = x + dx[d];

                    if (!isValid(ny, nx)) continue;

                    const nex = result[ny][nx];
                    if (cur === nex) count++
                }
            }
        }

        maxCount = Math.max(maxCount, count / 2);
    }
}

console.log(maxCount);

function isValid(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}

function gravity(grid) {
    for (let c = 0; c < n; c++) {
        let t = n - 1;
        for (r = n - 1; r >= 0; r--) {
            if (grid[r][c] !== 0) {
                grid[t][c] = grid[r][c];
                if (t !== r) grid[r][c] = 0;
                t--;
            }
        }
        while (t >= 0) {
            grid[t][c] = 0;
            t--;
        }
    }

    return grid;
}
