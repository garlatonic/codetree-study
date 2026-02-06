const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));
// Please Write your code here.

const special = [];
for (let x = a; x <= b; x++) {
    let nearestS = Infinity;
    let nearestN = Infinity;

    for (let j = 0; j < t; j++) {
        const [alpa, position] = snData[j];

        let near = Math.abs(x - position);
        if (alpa === "S") {
            nearestS = Math.min(near, nearestS);
        } else {
            nearestN = Math.min(near, nearestN);
        }
    }

    if (nearestS <= nearestN) special.push(x);
}

console.log(special.length)