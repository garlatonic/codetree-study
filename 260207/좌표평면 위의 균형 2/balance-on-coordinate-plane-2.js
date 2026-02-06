const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let minCount = Infinity;
for (let a = 2; a <= 100; a += 2) {
    for (let b = 2; b <= 100; b += 2) {
        let [tl, tr, bl, br] = [0, 0, 0, 0];

        for (const [x, y] of points) {
            // 좌상단
            if (x < a && y > b) tl++;
            // 우상단
            else if (x > a && y > b) tr++;
            // 좌하단
            else if (x < a && y < b) bl++;
            // 우하단
            else if (x > a && y < b) br++;
        }

        const maxCount = Math.max(tl, tr, bl, br);
        minCount = Math.min(maxCount, minCount);
    }
}

console.log(minCount);