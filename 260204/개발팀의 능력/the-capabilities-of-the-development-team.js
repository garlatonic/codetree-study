const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.

// 최대 능력의 팀과 최소 능력의 팀 간의 능력 차이가 최소가 되도록 만드는 프로그램을 작성
function calcDiff(i, j, k, l) {
    const sum1 = abilities[i] + abilities[j];
    const sum2 = abilities[k] + abilities[l];
    const sum3 = abilities.reduce((acc, cur) => acc + cur, 0) - sum1 - sum2;

    if (sum1 === sum2 || sum2 === sum3 || sum1 === sum3) return Infinity;

    const max = Math.max(sum1, sum2, sum3);
    const min = Math.min(sum1, sum2, sum3);

    return max - min;
}

// 여기까지가 첫번째 팀원
let minDiff = Infinity;
for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        // 여기서부터 두번째 팀원
        for (let k = 0; k < 5; k++) {
            for (let l = k + 1; l < 5; l++) {
                if (i === k || i === l || j === k || j === l) continue;

                minDiff = Math.min(minDiff, calcDiff(i, j, k, l))
            }
        }
    }
}

console.log(minDiff === Infinity ? -1 : minDiff);
