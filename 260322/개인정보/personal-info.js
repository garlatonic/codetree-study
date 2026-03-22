const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
    const [name, heightStr, weightStr] = input[i].split(' ');
    const height = Number(heightStr);
    const weight = Number(weightStr);
    students.push({ name, height, weight });
}

// Please Write your code here.
// name 정렬
console.log("name");
[...students]
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((student) => console.log(Object.values(student).join(" ")));

console.log(`\nheight`);
[...students]
    .sort((a, b) => b.height - a.height)
    .forEach((student) => console.log(Object.values(student).join(" ")));