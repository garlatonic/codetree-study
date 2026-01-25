const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isConnected(num1, num2) {
    const startIndex = num1.indexOf(num2[0]);
    if (startIndex === -1) {
        return false;
    }
    for (let i = 0; i < num2.length; i++) {
        if (num1[startIndex + i] !== num2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isConnected(a, b) ? "Yes" : "No");
