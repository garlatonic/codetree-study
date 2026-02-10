const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.
function isPossible(maxVal) {
    const positions = [];
    // 첫번째 인덱스
    positions.push(0);
    // maxVal보다 낮은 애들로 구성
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] <= maxVal) positions.push(i);
    }
    // 마지막 인덱스
    positions.push(n - 1);

    // 인접한 인덱스가 k 이내인지 체크
    for (let i = 1; i < positions.length; i++) {
        const dist = positions[i] - positions[i - 1];
        if (dist > k) return false;
    }

    return true;
}

let minMax = Infinity;
for (let i = 1; i <= n; i++) {
    if (isPossible(i)) {
        minMax = Math.min(minMax, i);
    }
}
console.log(minMax)