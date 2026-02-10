const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.
function isPossible(maxVal) {
    if (arr[0] > maxVal || arr[n-1] > maxVal) return false;

    const positions = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] <= maxVal) positions.push(i);
    }

    // 인접한 인덱스가 k 이내인지 체크
    for (let i = 1; i < positions.length; i++) {
        const dist = positions[i] - positions[i - 1];
        if (dist > k) return false;
    }

    return true;
}

let minMax = Infinity;
for (let i = 1; i <= Math.max(...arr); i++) {
    if (isPossible(i)) {
        minMax = Math.min(minMax, i);
    }
}
console.log(minMax)