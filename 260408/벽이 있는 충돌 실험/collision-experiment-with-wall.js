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
        board[y][x] = d;
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
    while (time < n * n) {
        let isBlocked = false;

        const newBoard = Array.from({ length: n }, () => Array(n).fill(""));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (!board[r][c]) continue;

                const d = dir[board[r][c]];
                const ny = r + dy[d];
                const nx = c + dx[d];

                // 구슬이 보드 밖으로 나갈 경우 방향을 반대로 바꿔준다
                if (!inRange(ny, nx, n)) {
                    if (board[r][c] === "U") newBoard[r][c] = "D";
                    else if (board[r][c] === "D") newBoard[r][c] = "U";
                    else if (board[r][c] === "R") newBoard[r][c] = "L";
                    else newBoard[r][c] = "R";
                    continue;
                }

                // 여러개가 부딪힐 수도 있으니까 문자열로 저장
                newBoard[ny][nx] += board[r][c];
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

        // 구슬이 부딪히지 않았다고 해도 나중에 부딪힐 수 있다.
        if (!isBlocked) {
            time++;
        } else {
            // 부딪혔다면 시간을 초기화해서 더 오래 기다려본다.
            time = 0;
        }
        result[i] = board.flat().filter(Boolean).length;
    }
}

console.log(result.join("\n"));

function inRange(y, x, n) {
    return 0 <= y && y < n && 0 <= x && x < n;
}
