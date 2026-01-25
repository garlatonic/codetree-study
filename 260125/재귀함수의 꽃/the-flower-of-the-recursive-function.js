const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.

let result = "";
function go(n) {
    if (n === 0) return;
    result += n + " ";
    go(n - 1);
    result += n + " ";
}

go(n);
console.log(result)