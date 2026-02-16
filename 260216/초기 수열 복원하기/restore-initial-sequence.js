const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const sums = input[1].split(' ').map(Number);

// Please Write your code here.
let answer = [];
for (let i = 1; i <= n; i++) {
    const init = [i];
    let next = i;

    while (init.length < n) {
        // 숫자가 범위를 벗어나면 아웃
        if (next > n || next < 1) break;

        // 초기 수열에 있을 경우에도 아웃
        if(init.includes(sums[init.length - 1] - next)) break;

        next = sums[init.length - 1] - next;
        init.push(next);
    }

    if(init.length === n) {
        answer = [...init];
        break;
    }
}
console.log(answer.join(" "));