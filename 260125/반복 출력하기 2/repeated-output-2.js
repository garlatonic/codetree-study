const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function printString(n) {
    if (n === 0) return;
    printString(n - 1);
    console.log("HelloWorld")
}

printString(n)