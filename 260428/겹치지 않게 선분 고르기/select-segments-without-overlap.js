const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const MAX_POS = 1000;
let maxCount = 0;
const visited = Array(n).fill(false);
function dfs(index) {
    if (index === n) {
        const result = solution(visited);
        maxCount = Math.max(maxCount, result);
        return;
    }

    visited[index] = false;
    dfs(index + 1);
    visited[index] = true;
    dfs(index + 1);
}

dfs(0);
console.log(maxCount);

function solution(arr) {
    let count = 0;
    const pos = Array(MAX_POS).fill(false);

    for (let i = 0; i < n; i++) {
        if (!arr[i]) continue;

        const [l, r] = segments[i];
        for (let p = l; p <= r; p++) {
            if (pos[p]) return 0;

            pos[p] = true;
        }
        count += 1;
    }

    return count;
}