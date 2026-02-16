const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

// Please write your code here.
let maxCount = 0;
let maxBomb = 0;

const numsSet = new Set(nums);

numsSet.forEach((num) => {
    let curIdx = nums.indexOf(num);
    let prevBomb = nums.indexOf(num);
    let totalCount = 0;
    let count = 0;

    while (curIdx < n) {
        curIdx += 1;

        if (nums[curIdx] === num) {
            if (curIdx - prevBomb <= k) { // 만약 k 거리 이내일 경우
                if (count === 0) count = 1;
                count += 1;
            } else {
                totalCount += count;
                count = 0;
            }

            prevBomb = curIdx;
        }
    }

    totalCount += count;

    if (totalCount > 0) {
        if (totalCount > maxCount) {
            maxCount = totalCount;
            maxBomb = num;
        } else if (totalCount === maxCount && maxBomb < num) {
            maxBomb = num;
        }
    }
})

console.log(maxBomb)