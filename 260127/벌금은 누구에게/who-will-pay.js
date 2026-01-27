const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
const persons = Array(n).fill(0);

for (let i = 0; i < m; i++) {
    const personNum = penalizedPersons[i] - 1;
    persons[personNum]++;
    if (persons[personNum] === k) break;
}

console.log(persons.indexOf(k) + 1)