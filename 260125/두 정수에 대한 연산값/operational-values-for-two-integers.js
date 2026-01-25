const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function solution(a, b) {
    const [min, max] = [Math.min(a, b), Math.max(a, b)];
    return [min * 2, max + 25];
}

console.log(solution(a, b).join(" "))