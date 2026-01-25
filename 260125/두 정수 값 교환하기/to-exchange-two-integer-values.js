const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

const swap = (n, m) => {
    [n, m] = [m, n];
    return [n, m];
}

console.log(swap(n, m).join(" "))