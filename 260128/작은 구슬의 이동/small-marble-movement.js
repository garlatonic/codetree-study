const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
function isRange(x, y) {
    return 0 < x && x <= n && 0 < y && y <= n;
}

// 동 남 북 서
// 뒤집히는 방향의 dx, dy 컨트롤은 동남북서로, -3
const dx = [1, 0, 0, -1];
const dy = [0, -1, 1, 0];

let x = c, y = r;

const dir = {
    U: 2,
    D: 1,
    R: 0,
    L: 3
}

let go = dir[d];
for (let s = 1; s <= t; s++) {
    let nx = x + dx[go], ny = y + dy[go];
    if (!isRange(nx, ny)) {
        go = Math.abs(go - 3);
        nx = x, ny = y;
    }
    x = nx, ny = y;
}

console.log(y, x)