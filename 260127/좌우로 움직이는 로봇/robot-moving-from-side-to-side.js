const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.

const positionA = [0];
const positionB = [0];

for (const move of movesA) {
    const [t, d] = move.split(" ");

    for (let i = 0; i < Number(t); i++) {
        const prevPosition = positionA[positionA.length - 1];
        positionA.push(d === "L" ? prevPosition - 1 : prevPosition + 1);
    }
}
for (const move of movesB) {
    const [t, d] = move.split(" ");

    for (let i = 0; i < Number(t); i++) {
        const prevPosition = positionB[positionB.length - 1];
        positionB.push(d === "L" ? prevPosition - 1 : prevPosition + 1);
    }
}

const maxTime = Math.max(positionA.length, positionB.length);
let count = 0;
for (let i = 1; i < maxTime; i++) {
    const currentA = positionA[i] ?? positionA[positionA.length - 1];
    const currentB = positionB[i] ?? positionB[positionB.length - 1];

    const prevA = positionA[i - 1] ?? positionA[positionA.length - 2];
    const prevB = positionB[i - 1] ?? positionB[positionB.length - 2];
    if (currentA === currentB && prevA !== prevB) {
        count++;
    }
}

console.log(count)