const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [N, M, r, c] = input.split(" ").map(Number);
const grid = Array.from({ length: N }, () => Array(N).fill(0));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

grid[r - 1][c - 1] = 1;

for (let t = 0; t < M; t++) {
    const board = structuredClone(grid);
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (!grid[r][c]) continue;

            for (let d = 0; d < 4; d++) {
                const ny = r + dy[d] * 2 ** t;
                const nx = c + dx[d] * 2 ** t;

                if (!isRange(ny, nx)) continue;
                board[ny][nx] = 1;
            }
        }
    }
    for (let r = 0; r < N; r++) {
        grid[r] = board[r];
    }
}

console.log(grid.reduce((acc, cur) => acc + cur.reduce((a, c) => a + c, 0), 0));

function isRange(r, c) {
    return 0 <= r && r < N && 0 <= c && c < N;
}
