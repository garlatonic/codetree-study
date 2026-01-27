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

shakes.sort((a, b) => a.time - b.time);

while (index < t) {
    time += shakes[index].time;

    const person1 = shakes[index].person1 - 1;
    const person2 = shakes[index].person2 - 1;

    // 악수하기 전 두 사람의 상태를 먼저 확인
    const isP1Infected = developers[person1].infested;
    const isP2Infected = developers[person2].infested;

    // [사건 1] P1이 감염자이고 전파 능력이 있다면 -> P1은 악수 횟수를 쓰고 P2에게 영향을 줌
    if (isP1Infected && developers[person1].count > 0) {
        developers[person1].count--;
        developers[person2].infested = true; // P2가 원래 감염자였든 아니든 상관없이 감염 상태로 둠
    }

    // [사건 2] P2가 감염자이고 전파 능력이 있다면 -> P2는 악수 횟수를 쓰고 P1에게 영향을 줌
    if (isP2Infected && developers[person2].count > 0) {
        developers[person2].count--;
        developers[person1].infested = true;
    }

    index++;
}

const answer = [];
Object.entries(developers).forEach(([_, v]) => {
    if (v.infested) answer.push(1);
    else answer.push(0);
})

console.log(answer.join(""))