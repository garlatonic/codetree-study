const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
function g(a1, a2) {
    const sum = A.slice(a1 - 1, a2).reduce((acc, cur) => acc += cur, 0);
    console.log(sum)
}

queries.forEach(([a1, a2]) => g(a1, a2))