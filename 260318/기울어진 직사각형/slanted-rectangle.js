const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let grid = [];
for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const dy = [-1, -1, 1, 1];
const dx = [1, -1, -1, 1];

function isValid(y, x, i, j) {
    const d = [y, x];
    const c = [y + dy[0] * i, x + dx[0] * i];
    const a = [c[0] + dy[1] * j, c[1] + dx[1] * j];
    const b = [a[0] + dy[2] * i, a[1] + dx[2] * i];

    return (
        0 <= a[0] &&
        a[0] < n &&
        0 <= a[1] &&
        a[1] < n &&
        0 <= b[0] &&
        b[0] < n &&
        0 <= b[1] &&
        b[1] < n &&
        0 <= c[0] &&
        c[0] < n &&
        0 <= c[1] &&
        c[1] < n &&
        0 <= d[0] &&
        d[0] < n &&
        0 <= d[1] &&
        d[1] < n
    );
}

let maxSum = 0;
for (let y = n - 1; y >= 0; y--) {
    for (let x = 0; x < n; x++) {
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < n; j++) {
                let [cy, cx] = [y, x];
                let sum = 0;

                if (!isValid(y, x, i, j)) continue;

                // D→C: 방향0으로 i칸
                for (let k = 0; k < i; k++) {
                    cy += dy[0];
                    cx += dx[0];
                    sum += grid[cy][cx];
                }
                // C→A: 방향1으로 j칸
                for (let k = 0; k < j; k++) {
                    cy += dy[1];
                    cx += dx[1];
                    sum += grid[cy][cx];
                }
                // A→B: 방향2으로 i칸
                for (let k = 0; k < i; k++) {
                    cy += dy[2];
                    cx += dx[2];
                    sum += grid[cy][cx];
                }
                // B→D: 방향3으로 j칸
                for (let k = 0; k < j; k++) {
                    cy += dy[3];
                    cx += dx[3];
                    sum += grid[cy][cx];
                }

                maxSum = Math.max(maxSum, sum);
            }
        }
    }
}

console.log(maxSum);
