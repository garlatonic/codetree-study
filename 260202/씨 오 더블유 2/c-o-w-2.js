const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let count = 0;
for (let i = 0; i < n - 2; i++) {
    if (string[i] !== "C") continue;

    for (let j = i + 1; j < n - 1; j++) {
        if (string[j] !== "O") continue;

        for (let k = j + 1; k < n; k++) {
            if (string[k] !== "W") continue;

            count++;
        }
    }
}

console.log(count);