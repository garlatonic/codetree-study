const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
const pairs = [];
for (let i = 0; i < n; i++) {
    if (seat[i] !== "1") continue;
    for (let j = i + 1; j < n; j++) {
        if (seat[j] !== "1") continue;
        else {
            pairs.push([i, j]);
            break;
        }
    }
}

let answer = 0;
for (let i = 0; i < pairs.length; i++) {
    const [x, y] = pairs[i];
    let maxDist = 0;

    for (let j = x + 1; j < y; j++) {
        let dist = y - j > j - x ? j - x : y - j;
        maxDist = Math.max(maxDist, dist)
    }

    // 혹시 만약에? 0번째랑 n번째에 1이 없을 경우
    let start = ["0", pairs[0][0]];
    let end = [pairs[pairs.length - 1][1], (n - 1).toString()];
    if (start[0] !== start[1]) {
        let dist = start[1] - start[0];
        maxDist = Math.max(maxDist, dist)
    }
    if (end[0] !== end[1]) {
        let dist = end[1] - end[0];
        maxDist = Math.max(maxDist, dist)
    }

    answer = Math.max(answer, maxDist);
}

console.log(answer);