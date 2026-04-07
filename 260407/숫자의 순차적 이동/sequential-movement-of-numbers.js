const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const grid = input.slice(1).map((line) => line.trim().split(" ").map(Number));

const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

for (let m = 0; m < M; m++) {
    let count = 1;
    while (count <= N * N) {
        let row = -1;

        for (let y = 0; y < N; y++) {
            if (!grid[y].includes(count)) continue;
            row = y;
        }

        for (let x = 0; x < N; x++) {
            if (grid[row][x] !== count) continue;

            let maxDir = -1;
            let maxVal = 0;
            for (let d = 0; d < 8; d++) {
                const ny = row + dy[d];
                const nx = x + dx[d];
                if (!inRange(ny, nx)) continue;
                if (maxVal < grid[ny][nx]) {
                    maxVal = grid[ny][nx];
                    maxDir = d;
                }
            }
            const ny = row + dy[maxDir];
            const nx = x + dx[maxDir];

            grid[row][x] = grid[ny][nx];
            grid[ny][nx] = count;

            break;
        }

        count++;
    }
}

console.log(grid.map((line) => line.join(" ")).join("\n"));

function inRange(y, x) {
    return 0 <= y && y < N && 0 <= x && x < N;
}
