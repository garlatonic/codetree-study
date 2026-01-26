const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
function ac(a, b) {
    return a - b;
}
function dc(a, b) {
    return b - a;
}

console.log(nums.sort(ac).join(" "));
console.log(nums.sort(dc).join(" "));
