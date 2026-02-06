const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let through = false;

for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <= 10; b++) {
        for (let c = 0; c <= 10; c++) {
            const result = points.every(([x, y]) => {
                return (x === a || x === b || x === c) || (x === a || x === b || y === c) || (x === a || y === b || y === c) || (y === a || y === b || y === c);
            });

            if (result) {
                through = true;
                break;
            }
        }
        if (through) break;
    }
    if (through) break;
}

console.log(through ? 1 : 0);