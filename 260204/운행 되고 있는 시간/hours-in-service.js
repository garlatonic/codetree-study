const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let maxWorkTime = 0;
for (let i = 0; i < n; i++) {
    const times = Array(1000).fill(0);

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        let [start, end] = segments[j];
        for (let k = start; k < end; k++) {
            times[k] = 1;
        }
    }

    const workTime = times.filter((time) => time !== 0).length;
    maxWorkTime = Math.max(maxWorkTime, workTime);
}

console.log(maxWorkTime);