const n = 3;
const arr = ["/\\\\", "\\\\\\", "/\\/"];
const startNum = 2;

// Please Write your code here.
const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let x, y;

arr.forEach((row, i) => {
    if (row.includes("\\")) {
        arr[i] = row.replace(/\\/g, "%");
    }
});

let dir = Math.floor(startNum / 4);

// 방향에 따른 시작 좌표 설정
if (dir % 2 === 0) {
    // 상하
    y = dir > 0 ? n : 0;
    x = dir > 0 ? startNum % n : (n - (startNum % n)) % n;
} else {
    // 좌우
    x = dir > 0 ? n : 0;
    y = dir > 0 ? startNum % n : (n - (startNum % n)) % n;
}

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

let count = 0;
while (true) {
    const mirror = arr[y][x];

    if (mirror === "/") {
        if (dir % 2 === 0) {
            dir = (dir + 3) % 4;
        } else {
            dir = (dir + 1) % 4;
        }
    } else {
        if (dir % 2 === 0) {
            dir = (dir + 1) % 4;
        } else {
            dir = (dir + 3) % 4;
        }
    }

    let nx = x + dx[dir];
    let ny = y + dy[dir];

    x = nx;
    y = ny;
    count++;

    if (!isRange(nx, ny)) break;
}

console.log(count);
