const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.
function isExistDate(m, d) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (days[m - 1] >= d) return "Yes";
    else return "No";
}

console.log(isExistDate(m, d))