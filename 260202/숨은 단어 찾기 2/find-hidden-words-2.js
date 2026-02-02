const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);
// Please Write your code here.

const direction = [
    [-1, 0], // 상향
    [-1, 1], // 우상향
    [0, 1], // 우향
    [1, 1], // 우하향
    [1, 0], // 하향
    [1, -1], // 좌하향
    [0, -1], // 좌향
    [-1, -1] // 좌상향
]

function check(y, x) {
    let count = 0;

    for (const dir of direction) {
        const [dy, dx] = dir;

        let steps = 1;
        let ny = y + dy;
        let nx = x + dx;

        while (0 <= ny && ny < n && 0 <= nx && nx < m && steps < 3) {
            if (arr[ny][nx] === "E") {
                ny += dy;
                nx += dx;
                steps++;
            } else {
                break;
            }
        }

        if (steps === 3) {
            count++;
        }
    }

    return count;
}

let answer = 0;
for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
        if (arr[y][x] !== "L") continue;

        answer += check(y, x);
    }
}

console.log(answer);