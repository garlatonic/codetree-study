const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));


// Please Write your code here.
let maxSum = 0;
for (let i = 1; i <= n; i++) {
    // i번째에 있는 원소가 시작 위치
    let count = 1;
    let move = arr[i];
    const moveArr = [move];

    while (count < m) {
        move = arr[move];
        moveArr.push(move);
        count++;
    }

    maxSum = Math.max(maxSum, moveArr.reduce((acc, cur) => acc + cur, 0));
}

console.log(maxSum)