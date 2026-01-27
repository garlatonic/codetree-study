const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const OFFSET = 1000;
const MAX_R = 2001;

const area = Array.from({ length: MAX_R }, () => Array(MAX_R).fill(0));

function getArea(rect, oper) {
    let [x1, y1, x2, y2] = rect;
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map((num) => num + OFFSET);

    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            area[y][x] = oper === "+" ? 1 : 0;
        }
    }
}

getArea(rect1, "+");
getArea(rect2, "-");


// 잔해물이 남아있지 않는지 확인
if (area.every((row) => row.every((cell) => cell === 0))) {
    console.log(0);
} else {
    // 남아있는 잔해물이 있을 때만 넓이 계산
    let [mx1, my1, mx2, my2] = [0, 0, 0, 0];

    // y축 최소값 찾기
    for (let y = 0; y < MAX_R; y++) {
        if (area[y].indexOf(1) !== -1) {
            my1 = y;
            break;
        }
    }

    // x축 최소값, y축 최대값, x축 최대값 찾기
    for (let y = 0; y < MAX_R; y++) {
        for (let x = 0; x < MAX_R; x++) {
            if (area[y][x] === 1) {
                if (mx1 === 0 || x < mx1) mx1 = x;
                if (mx2 === 0 || x > mx2) mx2 = x;
                if (my2 === 0 || y > my2) my2 = y;
            }
        }
    }

    const result = (mx2 - mx1 + 1) * (my2 - my1 + 1);
    console.log(result);
}