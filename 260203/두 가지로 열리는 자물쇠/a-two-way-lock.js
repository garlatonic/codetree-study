const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.

// 거리 2 이내인지 확인
function isRange(base, target) {
    for (let offset = -2; offset <= 2; offset++) {
        let pos = ((base - 1 + offset + n) % n) + 1;
        if (pos === target) return true;
    }
    return false;
}

let count = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            // 첫 번째 조합과 가까운지
            const near1 = isRange(a, i) && isRange(b, j) && isRange(c, k);
            // 두 번째 조합과 가까운지  
            const near2 = isRange(a2, i) && isRange(b2, j) && isRange(c2, k);

            // 둘 중 하나라도 가까우면?
            if (near1 || near2) count++;
        }
    }
}

console.log(count)