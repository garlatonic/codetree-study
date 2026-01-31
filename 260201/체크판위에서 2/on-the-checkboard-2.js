const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
const startColor = grid[0][0];
const endColor = grid[R - 1][C - 1];

let count = 0;

for (let i1 = 1; i1 < R - 2; i1++) {
    for (let j1 = 1; j1 < C - 2; j1++) {
        // 시작점과 색이 달라야함
        if (grid[i1][j1] === startColor) continue;

        // 두번째 중간지점 선택
        for (let i2 = i1 + 1; i2 < R - 1; i2++) {
            for (let j2 = j1 + 1; j2 < C - 1; j2++) {
                // 첫번째 중간지점이랑 색 달라야함
                if (grid[i1][j1] === grid[i2][j2]) continue;

                // 도착점이랑도 달라야함
                if (grid[i2][j2] === endColor) continue;

                count++;
            }
        }
    }
}

console.log(count)