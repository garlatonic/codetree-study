const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;
const t = Number(input[idx++]);

const result = Array(t).fill(0);
for (let i = 0; i < t; i++) {
    const [n, m] = input[idx++].split(" ").map(Number);
    const marbles = [];
    for (let j = 0; j < m; j++) {
        let [x, y, d] = input[idx++].split(" ");
        marbles.push([Number(x) - 1, Number(y) - 1, d[0]]);
    }

    const board = Array.from({ length: n }, () => Array(n).fill(""));
    for (const [x, y, d] of marbles) {
        board[x][y] = d;
    }

    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];

    const dir = {
        U: 1,
        D: 0,
        R: 2,
        L: 3,
    };

    // 아주 오래된 시간이 흐른 뒤에도 구슬이 안 부딪힐 경우에만 멈추도록 한다
    let time = 0;
    const LIMIT = 2 * n;
    while (time < LIMIT) {
        let isBlocked = false;

        const newBoard = Array.from({ length: n }, () => Array(n).fill(""));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const ch = board[r][c]
                if (!ch) continue;

                const d = dir[ch];
                const ny = r + dy[d];
                const nx = c + dx[d];

                // 구슬이 벽에 부딪히면 움직이지 않고 움직이는 방향만 반대로 뒤집힌다.
                if (!inRange(ny, nx, n)) {
                    if (ch === "U") newBoard[r][c] += "D";
                    else if (ch === "D") newBoard[r][c] += "U";
                    else if (ch === "R") newBoard[r][c] += "L";
                    else newBoard[r][c] += "R";
                    continue;
                }

                // 충돌은 두 구슬이 이동 후 같은 위치에 있는 경우에만 일어난다.
                newBoard[ny][nx] += ch;
            }
        }

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (newBoard[r][c].length > 1) {
                    isBlocked = true;
                    newBoard[r][c] = "";
                }
                board[r][c] = newBoard[r][c];
            }
        }

        if (isBlocked) time = 0;
        else time++;
    }
    // 남은 구슬의 갯수를 센다
    result[i] = board.flat().filter(Boolean).length;
}

console.log(result.join("\n"));

function inRange(y, x, n) {
    return 0 <= y && y < n && 0 <= x && x < n;
}
