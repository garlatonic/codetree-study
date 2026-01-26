const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
function isSameWords(word1, word2) {
    return [...word1].sort().join("") === [...word2].sort().join("") ? "Yes" : "No";
}

console.log(isSameWords(str1, str2))