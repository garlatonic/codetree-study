const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

const isDiffChar = (str) => {
    const newStr = new Set([...str]);
    return newStr.size >= 2 ? "Yes" : "No";
}

console.log(isDiffChar(A))