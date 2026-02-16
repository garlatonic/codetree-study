const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
let maxDist = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (seat[i] === "0" && seat[j] === "0") {
            // 두명 앉히기
            seat[i] = "1";
            seat[j] = "1";

            // 자리 최솟값
            maxDist = Math.max(maxDist, minDist());

            // 두명 빼기
            seat[i] = "0";
            seat[j] = "0";
        }
    }
}

console.log(maxDist)

function minDist() {
    let dist = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (seat[i] === "1" && seat[j] === "1") dist = Math.min(dist, j - i);
        }
    }

    return dist;
}