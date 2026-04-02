const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const [y, x] = input[1].trim().split(" ").map(Number);
const maze = input.slice(2).map((line) => line.trim().split(""));

let cy = y - 1;
let cx = x - 1;

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
let dir = 0;
let t = 0;

// 방문 경로 저장 (무한루프 확인)
const visited = new Set();

while (true) {
    const state = `${cy},${cx},${dir}`;
    if (visited.has(state)) {
        // 같은 경로로 돌아왔을 경우 무한루프로 판단, 즉시 종료
        console.log(-1);
        process.exit(0);
    }
    visited.add(state);

    const right = (dir + 1) % 4;
    const frontY = cy + dy[dir], frontX = cx + dx[dir];
    const rightY = cy + dy[right], rightX = cx + dx[right];

    if (!isBlocked(rightY, rightX)) {
        // 1) 오른쪽 칸이 비어 있음: 우회전하고 한 칸 전진
        dir = right;
        cy += dy[dir];
        cx += dx[dir];
    } else if (!isBlocked(frontY, frontX)) {
        // 2) 오른쪽은 막혀 있지만 앞쪽이 비어 있음: 방향 그대로 한 칸 전진
        cy = frontY;
        cx = frontX;
    } else {
        // 3) 오른쪽도 막히고 앞도 막힘: 반시계방향으로 돌기
        // 회전만 하므로 count하지않음
        dir = (dir + 3) % 4;
        continue;
    }

    t++;
    if (cy < 0 || cy >= N || cx < 0 || cx >= N) break;
}

console.log(t);


function isBlocked(y, x) {
    return y >= 0 && y < N && x >= 0 && x < N && maze[y][x] === "#";
}