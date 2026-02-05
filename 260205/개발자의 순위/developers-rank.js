const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const pair = new Set();

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j) continue;

        let winner = true;
        for (let k = 0; k < arr.length; k++) {
            const ranking = arr[k];

            const a = ranking.indexOf(i); // 개발자 a의 순위
            const b = ranking.indexOf(j); // 개발자 b의 순위

            if (a >= b) {
                winner = false;
                break;
            }
        }

        if(winner) pair.add(`${i}, ${j}`)
    }
}

console.log(pair.size)