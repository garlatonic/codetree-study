const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
let minCount = Infinity;

function dfs(r, c, prevColor, changeCount) {
    if (r >= R || c >= C) return;

    const currentColor = grid[r][c];
    const newCount = prevColor !== currentColor ? changeCount + 1 : changeCount;

    if (r === R - 1 && c === C - 1) {
        minCount = Math.min(newCount, minCount);
        return;
    }

    dfs(r, c + 1, currentColor, newCount);
    dfs(r + 1, c, currentColor, newCount);
}

dfs(0, 0, null, 0);

console.log(minCount)