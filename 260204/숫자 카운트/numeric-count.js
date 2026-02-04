const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

function isSame(compare) {
    compare += "";
    let complete = true;

    for (const el of arr) {
        // B가 묻는 세자리 수, 1번 카운트, 2번 카운트
        let [num, c1, c2] = el;
        num += "";

        // 1번 카운트 - B의 숫자들 중 하나가 동일한 자리에 위치할 때 카운트 
        let strike = 0;
        for (let i = 0; i < 3; i++) {
            if (compare[i] === num[i]) strike++;
        }
        if (strike !== c1) {
            complete = false;
            break;
        }

        // 2번 카운트 - B의 숫자들 중 하나가 다른 자리에 위치할 때 카운트
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (num.indexOf(compare[i]) >= 0 && num.indexOf(compare[i]) !== i) ball++;
        }
        if (ball !== c2) {
            complete = false;
            break;
        }
    }

    return complete ? Number(compare) : null;
}

// Please write your code here.
const answer = [];
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        for (let k = 1; k < 10; k++) {
            // 서로 다른 숫자 세 개로 구성된 세 자리 수
            if(i === j || i === k || j === k) continue;

            const number = i * 100 + j * 10 + k;
            const result = isSame(number);
            if(result) answer.push(result);
        }
    }
}

console.log(answer.length)