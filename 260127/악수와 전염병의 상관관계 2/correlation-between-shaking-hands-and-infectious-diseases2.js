const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}
// Please write your code here.

const developers = Array(n).fill("").map(() => ({
    infested: false,
    count: k
}))

// 초기 감염자
developers[p - 1].infested = true;

let time = 0;
let index = 0;

while (index < t) {
    time += shakes[index].time;

    const person1 = shakes[index].person1 - 1;
    const person2 = shakes[index].person2 - 1;

    if (developers[person1].count > 0) {
        developers[person1].count--;
        developers[person2].infested = true;
    }

    index++;
}

const answer = [];
Object.entries(developers).forEach(([k, v]) => {
    if (v.infested) answer.push(1);
    else answer.push(0);
})

console.log(answer.join(""))