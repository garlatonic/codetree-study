const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
const seated = [];
for (let i = 0; i < n; i++) {
    if (seat[i] === "1") seated.push(i);
}

// 만약 좌석 양끝이 0이면
let candidate = [];
if (seat[0] === "0") candidate.push(seated[0]);
if (seat[n - 1] === "0") candidate.push((n - 1) - seated[seated.length - 1]);
candidate.sort((a, b) => b - a);

// 중간에 거리들
let seatDist = [];
for (let i = 1; i < seated.length; i++) {
    const dist = seated[i] - seated[i - 1];
    seatDist.push(dist);
}
seatDist.sort((a, b) => b - a);

let maxDist = 0;
if (seat[0] === "0" && seat[n - 1] === "0") {
    const case1 = [seated[0], (n - 1) - seated[seated.length - 1], ...seatDist].sort((a, b) => a - b)[0];
    const case2 = [seated[0], Math.floor(seatDist[0] / 2), ...seatDist.slice(1)].sort((a, b) => a - b)[0];
    const case3 = [(n - 1) - seated[seated.length - 1], Math.floor(seatDist[0] / 2), ...seatDist.slice(1)].sort((a, b) => a - b)[0];
    const case4 = [Math.floor(seatDist[0] / 2), Math.floor(seatDist[1] / 2), ...seatDist.slice(2)].sort((a, b) => a - b)[0];

    maxDist = Math.max(case1, case2, case3, case4);
} else if (seat[0] === "0") {
    const case1 = [seated[0], Math.floor(seatDist[0] / 2), ...seatDist.slice(1)].sort((a, b) => a - b)[0];
    const case2 = [Math.floor(seatDist[0] / 2), Math.floor(seatDist[1] / 2), ...seatDist.slice(2)].sort((a, b) => a - b)[0];

    maxDist = Math.max(case1, case2);
} else if (seat[n - 1] === "0") {
    const case1 = [(n - 1) - seated[seated.length - 1], Math.floor(seatDist[0] / 2), ...seatDist.slice(1)].sort((a, b) => a - b)[0];
    const case2 = [Math.floor(seatDist[0] / 2), Math.floor(seatDist[1] / 2), ...seatDist.slice(2)].sort((a, b) => a - b)[0];

    maxDist = Math.max(case1, case2);
} else {
    const case1 = [Math.floor(seatDist[0] / 2), Math.floor(seatDist[1] / 2), ...seatDist.slice(2)].sort((a, b) => a - b)[0];

    maxDist = case1;
}


console.log(maxDist);