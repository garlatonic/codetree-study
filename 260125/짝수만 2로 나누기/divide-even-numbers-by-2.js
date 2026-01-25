const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function divideEvenNumber(arr) {
    return arr.map((num) => num % 2 === 0 ? num / 2 : num);
}

console.log(divideEvenNumber(arr).join(" "))