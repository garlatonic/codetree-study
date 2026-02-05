const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let maxBomb = -1;
for (let i = 0; i < n; i++) {
    let bomb = -1;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        if(nums[i] === nums[j] && j - i < k) bomb = nums[i];
    }

    maxBomb = Math.max(maxBomb, bomb)
}

console.log(maxBomb)