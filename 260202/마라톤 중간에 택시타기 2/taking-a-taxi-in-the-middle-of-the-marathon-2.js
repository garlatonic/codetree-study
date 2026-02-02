const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.
let totalDist = 0;
for (let i = 0; i < n - 1; i++) {
    totalDist += Math.abs(arr[i][0] - arr[i + 1][0]) + Math.abs(arr[i][1] - arr[i + 1][1]);
}

let maxSave = 0;
for (let i = 1; i < n - 1; i++) {
    let [px, py] = arr[i - 1]; // 이전 체크포인트
    let [cx, cy] = arr[i]; // 현재 체크포인트
    let [nx, ny] = arr[i + 1]; // 다음 체크포인트

    // 원래 거리는 (이전 -> 현재)
    let originDist = Math.abs(px - cx) + Math.abs(py - cy) + Math.abs(cx - nx) + Math.abs(cy - ny);
    // 스킵하면
    let skipDis = Math.abs(px - nx) + Math.abs(py - ny);

    // 이렇게 스킵해서 절약된 거리는?
    maxSave = Math.max(maxSave, originDist - skipDis);
}

console.log(totalDist - maxSave)