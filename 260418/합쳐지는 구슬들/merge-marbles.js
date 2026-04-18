const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const marbles = [];
for (let i = 1; i <= M; i++) {
    let [r, c, d, w] = input[i].split(" ");
    r = Number(r);
    c = Number(c);
    w = Number(w);
    marbles.push([r, c, d, w]);
}

// Please Write your code here.
const grid = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => []),
);

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];
const mapper = { D: 0, R: 1, U: 2, L: 3 };

let idx = 1;
for (const [r, c, d, w] of marbles) {
    grid[r - 1][c - 1].push([mapper[d], w, idx++]);
}

for (let t = 0; t < T; t++) {
    const newGrid = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => []),
    );

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (!grid[y][x] || grid[y][x].length === 0) continue;

            let [d, w, idx] = grid[y][x][0];
            let ny = y + dy[d];
            let nx = x + dx[d];

            if (!inRange(ny, nx)) {
                d = (d + 2) % 4;
                newGrid[y][x].push([d, w, idx]);
                continue;
            }

            newGrid[ny][nx].push([d, w, idx]);
        }
    }
    // 2개 있는 칸 확인
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (!newGrid[y][x] || newGrid[y][x].length <= 1) continue;

            const arr = newGrid[y][x];
            let weight = 0;
            let number = 0;
            let direction = 0;
            for (const [d, w, idx] of arr) {
                weight += w;
                number = Math.max(number, idx);
                if (number === idx) direction = d;
            }

            newGrid[y][x].length = 0;
            newGrid[y][x].push([direction, weight, number]);
        }
    }

    for (let y = 0; y < N; y++) {
        grid[y] = newGrid[y];
    }
}

let count = 0;
let maxWeight = 0;

for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (!grid[y][x] || grid[y][x].length === 0) continue;
        count += 1;
        maxWeight = Math.max(maxWeight, grid[y][x][0][1]);
    }
}

console.log(count, maxWeight);

function inRange(y, x) {
    return 0 <= y && y < N && 0 <= x && x < N;
}
