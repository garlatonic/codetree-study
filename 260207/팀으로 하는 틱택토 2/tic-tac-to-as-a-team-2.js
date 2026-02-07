const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));
// Please write your code here.

let count = 0;
for (let a = 1; a < 10; a++) {
    for (let b = a + 1; b < 10; b++) {
        if (a === b) continue;

        let finish = false;

        // x축 방향으로 있는지?
        for (let y = 0; y < 3; y++) {
            const result = board[y].every((el) => el === a || el === b);

            if (result) {
                count++;
                finish = true;
                break;
            }
        }
        if (finish) break;

        // y축 방향
        for (let x = 0; x < 3; x++) {
            const setY = new Set();
            for (let y = 0; y < 3; y++) {
                setY.add(board[y][x])
            }
            if (setY.size === 2 && setY.has(a) && setY.has(b)) {
                count++;
                finish = true;
                break;
            }
        }
        if (finish) break;

        // 좌상단에서 우하단으로 내려가는 대각선
        const setB = new Set();
        for (let y = 0; y < 3; y++) {
            const x = y;
            setB.add(board[y][x]);
        }
        if (setB.size === 2 && setB.has(a) && setB.has(b)) {
            count++;
            finish = true;
            break;
        }
        if (finish) break;

        // 좌하단에서 우상단으로 올라가는 대각선
        const setT = new Set();
        for (let y = 0; y < 3; y++) {
            const x = 2 - y;
            setT.add(board[y][x]);
        }
        if (setT.size === 2 && setT.has(a) && setT.has(b)) {
            count++;
            finish = true;
            break;
        }
        if (finish) break;
    }
}

console.log(count);