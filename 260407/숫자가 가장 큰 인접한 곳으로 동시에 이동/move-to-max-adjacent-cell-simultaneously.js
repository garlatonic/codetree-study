const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const priorities = input
    .slice(1, N + 1)
    .map((line) => line.trim().split(" ").map(Number));
const starts = input.slice(N + 1).map((line) => {
    const [r, c] = line.trim().split(" ").map(Number);
    return { r: r - 1, c: c - 1 };
});

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

const grid = Array.from({ length: N }, () => Array(N).fill(0));
for (const { r, c } of starts) {
    grid[r][c] = 1;
}

for (let t = 0; t < T; t++) {
    const newGrid = Array.from({ length: N }, () => Array(N).fill(0));
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (grid[y][x] === 0) continue;

            let maxPriority = 0;
            let maxDir = -1;
            for (let d = 0; d < 4; d++) {
                const ny = y + dy[d];
                const nx = x + dx[d];

                if (!isRange(ny, nx)) continue;
                if (maxPriority < priorities[ny][nx]) {
                    maxPriority = priorities[ny][nx];
                    maxDir = d;
                }
            }
            const ny = y + dy[maxDir];
            const nx = x + dx[maxDir];
            newGrid[ny][nx] += 1;
        }
    }
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (newGrid[y][x] > 1) {
                newGrid[y][x] = 0;
            }
        }
    }
    for (let y = 0; y < N; y++) {
        grid[y] = newGrid[y];
    }
}

const result = grid.reduce((acc, row) => {
    return acc + row.reduce((sum, cell) => sum + cell, 0);
}, 0);
console.log(result);

function isRange(y, x) {
    return 0 <= y && y < N && 0 <= x && x < N;
}
