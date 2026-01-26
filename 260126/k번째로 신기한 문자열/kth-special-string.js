const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.

function isStartingWithChar(str) {
    return str.startsWith(t);
}

console.log(words.filter((word) => isStartingWithChar(word)).sort()[k - 1])