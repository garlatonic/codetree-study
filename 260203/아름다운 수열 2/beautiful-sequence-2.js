const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.
const sorted = arr2.sort((a, b) => a - b).join("");
let count = 0;

for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = i; j < i + m; j++) {
        arr.push(arr1[j]);
    }
    const str = arr.sort((a, b) => a - b).join("");
    if (sorted === str) count++;
}

console.log(count)