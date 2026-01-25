const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isConnected(num1, num2) {
    const [str1, str2] = [num1.join("").toString(), num2.join("").toString()];
    return str1.includes(str2);
}

console.log(isConnected(a, b) ? "Yes" : "No");
