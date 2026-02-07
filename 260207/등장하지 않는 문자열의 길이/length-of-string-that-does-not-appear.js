const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let minLength = Infinity;

for (let i = 1; i <= n; i++) {
    // i는 문자열 길이
    let allChecked = true;
    for (let j = 0; j <= n - i; j++) {
        const splitStr = string.split("").splice(j, i).join("");

        if (string.indexOf(splitStr) !== string.lastIndexOf(splitStr))
            allChecked = false;
    }
    if (allChecked) minLength = Math.min(minLength, i);
}

console.log(minLength);
