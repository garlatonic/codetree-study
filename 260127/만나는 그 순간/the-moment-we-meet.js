const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
let currentA = 0, currentB = 0, time = 0;

while (movesA.length > 0 || movesB.length > 0) {
    time++;

    if (movesA.length > 0) {
        let [directionA, distanceA] = movesA[0];

        distanceA = distanceA * 1;
        currentA = directionA === "L" ? currentA - 1 : currentA + 1;
        movesA[0][1]--;

        if (movesA[0][1] === 0) movesA.shift();
    }
    if (movesB.length > 0) {
        let [directionB, distanceB] = movesB[0];

        distanceB = distanceB * 1;
        currentB = directionB === "L" ? currentB - 1 : currentB + 1;
        movesB[0][1]--;

        if (movesB[0][1] === 0) movesB.shift();
    }

    if (currentA === currentB) break;
}

if (movesA.length > 0 || movesB.length > 0) {
    console.log(time);
} else {
    console.log(-1)
}