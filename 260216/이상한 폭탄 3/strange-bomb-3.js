const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

// Please write your code here.
let maxBomb = 0;
for (let i = 0; i < n; i++) {
    // i번째에 있는 폭탄
    const bombNum = nums[i];

    // 이전 폭탄 좌표
    let prev = i;
    // 폭발한 폭탄 카운트
    let count = 0;
    // 거리
    let dist = 0;

    while (dist < k) {
        dist++;

        if (nums[prev + dist] === bombNum) {
            count++;
            prev += dist;
            dist = 0;
        }
    }

    maxBomb = Math.max(maxBomb, count);
}

console.log(maxBomb);
process.exit();