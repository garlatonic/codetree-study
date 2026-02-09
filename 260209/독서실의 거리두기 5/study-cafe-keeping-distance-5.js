const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('').map(Number);

// Please Write your code here.
// 기존 배열에서 가장 최소의 거리 구하기
let minOriginDist = Infinity;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (seat[i] === 1 && seat[j] === 1) {
            minOriginDist = Math.min(minOriginDist, j - i)
        }
    }
}

let maxDist = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] === 1) continue;

    // 이전, 다음 자리 체크 (바로 이전 좌석 확인)
    let left = -1;
    let right = -1;
    for (let l = i - 1; l >= 0; l--) {
        if (seat[l] === 1) {
            left = l;
            break;
        }
    }
    for (let r = i + 1; r < n; r++) {
        if (seat[r] === 1) {
            right = r;
            break;
        }
    }

    let dist = 0;
    if (left < 0 && right >= 0) {
        dist = Math.abs(right - i);
    } else if (left >= 0 && right < 0) {
        dist = Math.abs(left - i);
    } else {
        dist = Math.abs(left - i) > Math.abs(right - i) ? Math.abs(right - i) : Math.abs(left - i);
    }
    
    dist = Math.min(dist, minOriginDist);
    maxDist = Math.max(maxDist, dist);
}
console.log(maxDist)