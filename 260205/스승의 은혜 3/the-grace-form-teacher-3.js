const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const pArr = [];
const sArr = [];
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    pArr.push(p);
    sArr.push(s);
}

// Please Write your code here.

// 해시로 저장
const students = new Map();
for (let i = 0; i < n; i++) {
    students.set(i, { price: pArr[i], delivery: sArr[i], totalPrice: pArr[i] + sArr[i] });
}
// 배송비 포함 가격이 저렴한 순으로 정렬
const sortedStudents = Array.from(students.entries()).sort((a, b) => {
    return a[1].totalPrice - b[1].totalPrice;
});

// 최대명수
let maxCount = 0;

for (let i = 0; i < n; i++) {
    // i번째를 반값으로
    const halfPrice = sortedStudents[i][1].price / 2 + sortedStudents[i][1].delivery;

    // 일딴 더하고 시작
    let sum = halfPrice;
    let count = 1;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        if (sum + sortedStudents[j][1].totalPrice <= b) {
            sum += sortedStudents[j][1].totalPrice;
            count += 1;
        } else break;
    }

    maxCount = Math.max(maxCount, count)
}

console.log(maxCount)