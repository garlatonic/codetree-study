const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
const absoluteArr = (arr) => {
    return arr.map((num) => num >= 0 ? num : num * -1);
}

console.log(absoluteArr(arr).join(" "))