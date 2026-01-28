const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.
const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

arr.forEach((row, i) => {
    if (row.includes("\\")) {
        arr[i] = row.replace(/\\/g, "%");
    }
});

// 어디서 쏘는지?
let dir, x, y;
if (0 < startNum && startNum <= n) {
    dir = 0;
    x = startNum - 1;
    y = 0;
} else if (n < startNum && startNum <= 2 * n) {
    dir = 3;
    x = n - 1;
    y = startNum - n - 1;
} else if (2 * n < startNum && startNum <= 3 * n) {
    dir = 2;
    x = 3 * n - startNum;
    y = n - 1;
} else {
    dir = 1;
    x = 0;
    y = 4 * n - startNum;
}

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

let count = 0;
while (true) {
    const mirror = arr[y][x];

    if (mirror === "/") {
        if (dir % 2 === 0) {
            dir = (dir + 3) % 4;
        } else {
            dir = (dir + 1) % 4;
        }
    } else {
        if (dir % 2 === 0) {
            dir = (dir + 1) % 4;
        } else {
            dir = (dir + 3) % 4;
        }
    }

    count++;

    x += dx[dir];
    y += dy[dir];

    if (!isRange(x, y)) break;
}

console.log(count);
