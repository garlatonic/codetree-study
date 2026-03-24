const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
class Queue {
    constructor() {
        this.head = -1;
        this.tail = -1;
        this.queue = [];
    }
    push(value) {
        this.queue.push(value);
        this.tail++;
    }
    pop() {
        if (this.empty()) throw new Error("Queue is empty");
        return this.queue[++this.head];
    }
    empty() {
        return this.head === this.tail;
    }
}

function isValid(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n && grid[y][x] === 0 && !visited[y][x];
}

const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const queue = new Queue();

for (let i = 0; i < k; i++) {
    let [sy, sx] = startPoints[i];
    sy--;
    sx--;

    if (grid[sy][sx] === 0 && !visited[sy][sx]) {
        visited[sy][sx] = true;
        queue.push([sy, sx]);
    }
}

while (!queue.empty()) {
    const [cy, cx] = queue.pop();

    for (let d = 0; d < 4; d++) {
        const ny = cy + dy[d];
        const nx = cx + dx[d];

        if (isValid(ny, nx)) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
        }
    }
}

console.log(visited.flat().filter(Boolean).length);