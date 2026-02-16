const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

// Please write your code here.
let maxBomb = 0;
let bomb = 0;
for (let i = 0; i < n; i++) {
    // i번째에 있는 폭탄
    const bombNum = nums[i];
    // 현재까지 터진 폭탄 갯수
    let totalCount = 0;
    // 지금 탐색하고있는 인덱스
    let curr = i;

    while (curr < n) {
        let count = 0;
        let found = false;

        for (let j = 0; j < k; j++) {
            curr++;
            if (curr >= n) break;

            if (nums[curr] === bombNum) {
                found = true;
                count++;
                break;
            }
        }

        if (found) count++;

        totalCount += count;
    }

    if (maxBomb < totalCount) {
        bomb = bombNum;
        maxBomb = totalCount;
    } else if (totalCount === 0) {
        continue;
    } else if (maxBomb === totalCount) {
        bomb = Math.max(bomb, bombNum);
    }
}

console.log(bomb);
process.exit();