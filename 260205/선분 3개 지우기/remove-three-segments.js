const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let count = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let arr = Array(100).fill(0);
            let isSame = false;

            for (let l = 0; l < n; l++) {
                if (l === i || l === j || l === k) continue;

                const [s, e] = segments[l];
                for (let m = s; m <= e; m++) {

                    if (arr[m] === 1) {
                        isSame = true;
                        break;
                    } else arr[m] = 1;
                }

                if (isSame) break;
            }

            if (isSame) continue;
            count++;
        }
    }
}

console.log(count)