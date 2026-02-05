const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, cheese, t] = input[i].split(' ').map(Number);
    info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push({ p, t });
}

// Please write your code here.
// 시간 순으로 정렬
info1.sort((a, b) => a.t - b.t);

// 특정 인물이 아파지기 전에 먹은 치즈 추리기
const cheeseMap = new Map();
for (let i = 0; i < s; i++) {
    for (let j = 0; j < d; j++) {
        if (info2[i].t > info1[j].t && info2[i].p === info1[j].p) {
            cheeseMap.set(info1[j].cheese,
                cheeseMap.get(info1[j].cheese)
                    ? [...cheeseMap.get(info1[j].cheese), info1[j].p]
                    : [info1[j].p]
            )
        }
    }
}

for (let i = 0; i < s; i++) {
    const { p } = info2[i];

    cheeseMap.forEach((v, k) => {
        if (v.indexOf(p) === -1) {
            cheeseMap.delete(k);
        }
    })
}

let maxCount = 0;
cheeseMap.forEach((_, k) => {
    let count = 0;
    for (let j = 0; j < d; j++) {
        if (info1[j].cheese === k) count++;
    }

    maxCount = Math.max(count, maxCount)
})

console.log(maxCount)