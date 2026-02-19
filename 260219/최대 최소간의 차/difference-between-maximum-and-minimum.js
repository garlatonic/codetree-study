const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
arr.sort((a, b) => a - b);

let minCost = Infinity;
for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    // i가 최댓값이라고 치면은? i로 변하기 위한 최대값

    const j = i - k; // j는 최솟값 (k 이미 적용됨)
    let costs = 0;

    arr.forEach((el) => {
        if (el > i) {
            costs += (el - i);
        } else if (el < j) {
            costs += (j - el);
        }
    })

    minCost = Math.min(costs, minCost)

}

console.log(minCost)