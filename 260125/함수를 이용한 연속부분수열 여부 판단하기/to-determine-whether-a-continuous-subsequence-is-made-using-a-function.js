const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isConnected(num1, num2) {
  while (a.length >= num2.length) {
    const start = num1.indexOf(num2[0]);
    if (start === -1) return false;
    const slice = num1.slice(start, start + num2.length);
    if (JSON.stringify(slice) === JSON.stringify(num2)) {
      return true;
    } else {
      num1.splice(start, 1);
    }
  }
  return false;
}

console.log(isConnected(a, b) ? "Yes" : "No");
