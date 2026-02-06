const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.

let count = 0;
for (let i = x; i <= y; i++) {
    const str = i.toString();
    const reverse = str.split("").reverse().join("");

    if(str === reverse) count++;
}

console.log(count)