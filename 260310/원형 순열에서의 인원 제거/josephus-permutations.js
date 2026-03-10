const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

const result = [];

const people = Array.from({ length: n }, (_, index) => index + 1);
let index = 0;

while (result.length !== n) {
    index = (index + k - 1) % people.length;
    result.push(people[index]);
    people.splice(index, 1);
}

console.log(result.join(" "));