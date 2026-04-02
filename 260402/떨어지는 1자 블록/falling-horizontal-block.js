const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [N, M, K] = input[0].trim().split(" ").map(Number);
const grid = input.slice(1).map((line) => line.trim().split(" ").map(Number));

K--; // 0-based index

let row = 0;
while (true) {
    let isLanded = false;

    for (let c = K; c < K + M; c++) {
        if (grid[row + 1][c] === 1) {
            isLanded = true;
            break;
        }
    }
    if (isLanded) break;

    for (let c = K; c < K + M; c++) {
        grid[row][c] = 0;
        grid[row + 1][c] = 1;
    }
    row++;
}

grid.forEach((line) => console.log(line.join(" ")));
