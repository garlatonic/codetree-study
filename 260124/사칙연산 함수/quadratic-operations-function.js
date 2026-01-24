const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function plus(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function multiple(a, b) {
    return a * b
}
function divide(a, b) {
    return Math.floor(a / b)
}

if (o === "+") {
    console.log(`${a} ${o} ${c} = ${plus(a, c)}`)
} else if (o === "-") {
    console.log(`${a} ${o} ${c} = ${minus(a, c)}`)
} else if (o === "*") {
    console.log(`${a} ${o} ${c} = ${multiple(a, c)}`)
} else if (o === "/") {
    console.log(`${a} ${o} ${c} = ${divide(a, c)}`)
} else console.log("False");