const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
studentsInput.sort((a, b) => {
    if(a[1] !== b[1]) return b[1] - a[1];
    if(a[2] !== b[2]) return b[2] - a[2];
    return b[3] - a[3];
})

let answer = "";
studentsInput.forEach((studentsInput) => {
    answer += studentsInput.join(" ") + `\n`;
})

console.log(answer);