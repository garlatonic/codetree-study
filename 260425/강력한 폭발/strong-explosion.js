const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

const bombsPosition = [];
for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
        if (grid[r][c] === 1) bombsPosition.push([r, c]);
    }
}

const bombsTypes = Array(bombsPosition.length).fill(0);
let answer = 0;

dfs(0);

console.log(answer);

function dfs(idx) {
    if (idx === bombsPosition.length) {
        // 시뮬레이션 호출 함수
        const result = explosion(bombsPosition);
        answer = Math.max(result, answer);
        return;
    }

    for (let type = 1; type <= 3; type++) {
        bombsTypes[idx] = type;
        dfs(idx + 1);
    }
}

function explosion(bombsPosition) {
    const exploded = new Set();
    for (let i = 0; i < bombsPosition.length; i++) {
        const [y, x] = bombsPosition[i];

        // 1번 패턴
        if (bombsTypes[i] === 1) {
            for (let ny = y - 2; ny <= y + 2; ny++) {
                if (!inRange(ny, x)) continue;
                exploded.add(`${ny},${x}`);
            }
        }

        // 2번 패턴
        if (bombsTypes[i] === 2) {
            exploded.add(`${y},${x}`);
            for (let d = 1; d < 8; d += 2) {
                const ny = y + dy[d];
                const nx = x + dx[d];

                if (!inRange(ny, nx)) continue;
                exploded.add(`${ny},${nx}`);
            }
        }

        // 3번 패턴
        if (bombsTypes[i] === 3) {
            exploded.add(`${y},${x}`);
            for (let d = 0; d < 8; d += 2) {
                const ny = y + dy[d];
                const nx = x + dx[d];

                if (!inRange(ny, nx)) continue;
                exploded.add(`${ny},${nx}`);
            }
        }
    }

    return exploded.size;
}

function inRange(r, c) {
    return 0 <= r && r < n && 0 <= c && c < n;
}