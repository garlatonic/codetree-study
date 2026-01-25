const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function printStar(count) {
    if (count > n) return;

    console.log("*".repeat(count));
    printStar(count + 1);
}

printStar(1);