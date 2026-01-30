const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
let current = grid[0][0];
let count = 0;
for (let i = 1; i < R - 1; i++) { // 무조건 왼쪽 상단에서 시작하므로 1줄 건너뜀
    for (let j = 0; j < C - 1; j++) {
        for (let k = i + 1; k < R; k++) {
            for (let l = j + 1; l < C; l++) {
                if(current === grid[i][j]) continue;

                if(current !== grid[k][l]) {
                    current = grid[k][l];
                    count++;
                }
            }
        }
    }
}
console.log(count)