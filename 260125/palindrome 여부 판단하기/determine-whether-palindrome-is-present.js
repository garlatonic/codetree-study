const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isPalindrome(str) {
    const reverse = str.split("").reverse().join("");
    return str === reverse;
}

console.log(isPalindrome(str) ? "Yes" : "No")