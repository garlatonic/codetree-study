const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bombColumns = input.slice(n + 1, n + 1 + m).map(Number);

function gravity() {
    for (let c = 0; c < n; c++) {
        let write = n - 1;
        for (let r = n - 1; r >= 0; r--) {
            if (grid[r][c] !== 0) {
                grid[write][c] = grid[r][c];
                if (write !== r) grid[r][c] = 0;
                write--;
            }
        }
        while (write >= 0) {
            grid[write][c] = 0;
            write--;
        }
    }
}

for (const bombColumn of bombColumns) {
    const c = bombColumn - 1;

    let r = 0;
    while (r < n && grid[r][c] === 0) r++;
    if (r === n) continue;

    const power = grid[r][c];
    grid[r][c] = 0;

    for (let d = 1; d < power; d++) {
        if (r - d >= 0) grid[r - d][c] = 0;
        if (r + d < n) grid[r + d][c] = 0;
        if (c - d >= 0) grid[r][c - d] = 0;
        if (c + d < n) grid[r][c + d] = 0;
    }

    gravity();
}

console.log(grid.map(row => row.join(" ")).join("\n"));