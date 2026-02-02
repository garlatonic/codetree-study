const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let maxCount = 0;

function hasOverlap(y1, x1, y2, x2) {
    // 두 세로줄이 겹치는지 확인
    if (y1 === y2) {
        // 같은 줄이면 x 범위가 겹치는지 확인
        const range1Start = x1;
        const range1End = x1 + 2;
        const range2Start = x2;
        const range2End = x2 + 2;

        // 범위가 겹치면 true
        return !(range1End < range2Start || range2End < range1Start);
    }
    return false;
}

function calculateSum(y1, x1, y2, x2) {
    let sum = 0;

    for (let i = 0; i < 3; i++) {
        sum += grid[y1][x1 + i];
    }
    for (let i = 0; i < 3; i++) {
        sum += grid[y2][x2 + i];
    }

    return sum;
}

for (let y1 = 0; y1 < n; y1++) {
    for (let x1 = 0; x1 < n - 2; x1++) {
        for (let y2 = 0; y2 < n; y2++) {
            for (let x2 = 0; x2 < n - 2; x2++) {
                // 겹치는 구간이 있으면 스킵
                if (hasOverlap(y1, x1, y2, x2)) continue;

                const sum = calculateSum(y1, x1, y2, x2);
                maxCount = Math.max(maxCount, sum);
            }
        }
    }
}

console.log(maxCount)