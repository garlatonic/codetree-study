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
    // 현재 터진 폭탄 갯수
    let count = 1;
    // 지금 탐색하고있는 인덱스
    let curr = i;

    while (curr < n) {
        let found = false;  // 같은 폭탄을 찾았는지 표시

        for (let j = 0; j < k && curr < n; j++) {
            curr++;

            if (nums[curr] === bombNum) {
                found = true;
                count++;
                break;
            }
        }

        if (!found) break;
    }

    if (maxBomb < count) {
        bomb = bombNum;
        maxBomb = Math.max(maxBomb, count);
    }
}

console.log(bomb);
process.exit();