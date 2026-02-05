const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let maxBomb = -1;
for (let i = 0; i < n; i++) {
    let bomb = -1;

    for (let j = 0; j < n; j++) {
        // 같은 위치라면 패스
        if (i === j) continue;

        // 같은 번호이고 k 안에 있을 경우
        if (nums[i] === nums[j] && j - i <= k) {
            // i ~ j에 있는 폭탄 다 터짐
            bomb = Math.max(...(nums.slice(i, j + 1)))
        };
    }

    maxBomb = Math.max(maxBomb, bomb)
}

console.log(maxBomb)