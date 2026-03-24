const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const visited = Array.from({ length: n }, () => Array(m).fill(false))

const dy = [1, -1, 0, 0];
const dx = [0, 0, -1, 1];

const queue = [];

queue.push([0, 0]);
visited[0][0] = true;

const result = bfs();
console.log(result ? 1 : 0)

// 뱀이 있을 경우 0, 없을 경우 1
function canGo(y, x) {
    return (0 <= y && y < n && 0 <= x && x < m) && !visited[y][x] && grid[y][x] === 1
}

function bfs() {
    while (queue.length !== 0) {
        const q = queue.shift();
        const [cy, cx] = q;

        if (cy === n - 1 && cx === m - 1) {
            return true;
        }

        for (let i = 0; i < 4; i++) {
            const ny = cy + dy[i];
            const nx = cx + dx[i];

            if (canGo(ny, nx)) {
                queue.push([ny, nx]);
                visited[ny][nx] = true;
            }
        }
    }

    return false;
}