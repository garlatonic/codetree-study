const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function printNumberAscending(n) {
    if (n === 0) return "";

    const prevStr = printNumberAscending(n - 1);
    if (n === 1) return "1";
    return prevStr + " " + n;
}
function printNumberDecending(n) {
    if (n === 0) return "";

    const nextStr = printNumberDecending(n - 1);
    if (n === 1) return "1";
    return n + " " + nextStr;
}

function printNumber(n) {
    console.log(printNumberAscending(n))
    console.log(printNumberDecending(n))
}

printNumber(n)