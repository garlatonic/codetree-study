const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m, t, k] = input[0].split(" ").map(Number);
const marbles = [];
for (let i = 1; i <= m; i++) {
    const [r, c, d, v] = input[i].split(" ");
    marbles.push([Number(r), Number(c), d, Number(v)]);
}
// Please Write your code here.

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const dir = {
    D: 0,
    U: 1,
    R: 2,
    L: 3,
};

let grid = Array.from({ length: n }, () => Array.from({ length: n }, () => []));
// 초기 구슬 세팅
for (const [r, c, d, v] of marbles) {
    grid[r - 1][c - 1].push([dir[d], v]);
}

let time = 0;
while (time < t) {
    const newGrid = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => []),
    );
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const marbs = grid[r][c]; // 현재 칸에 있는 구슬들
            if (!marbs.length) continue;

            for (let i = 0; i < marbs.length; i++) {
                let [d, v] = marbs[i];
                let ny = r + dy[d] * v;
                let nx = c + dx[d] * v;

                // 속력이 클 경우 여러 번 튕겨나갈 수 있으므로 while문으로 처리
                while (!isRange(ny, nx)) {
                    // 반대 방향으로 튕겨지도록 방향 변경
                    d = d % 2 === 0 ? d + 1 : d - 1;
                    if (ny < 0)
                        ny = -ny; // 위로 튕겨나갈 때
                    else if (ny >= n) ny = 2 * (n - 1) - ny; // 아래로 튕겨나갈 때
                    if (nx < 0)
                        nx = -nx; // 왼쪽으로 튕겨나갈 때
                    else if (nx >= n) nx = 2 * (n - 1) - nx;
                }

                newGrid[ny][nx].push([d, v]);
            }
        }
    }

    // 충돌 처리
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const marbs = newGrid[r][c];
            if (marbs.length <= k) continue; // 동일한 위치에 k개 이하의 구슬이 있으면 충돌 없음
            // 우선 순위가 높은 구슬 k개만 남기고 나머지 제거하기
            marbs.sort((a, b) => b[1] - a[1]); // 속력 기준 내림차순 정렬
            newGrid[r][c] = marbs.slice(0, k); // 상위 k개 구슬만 남기기
        }
    }

    grid = newGrid; // 새로운 그리드를 현재 그리드로 갱신
    time++;
}

console.log(
    grid.reduce(
        (acc, row) => acc + row.reduce((sum, cell) => sum + cell.length, 0),
        0,
    ),
); // 남아있는 구슬의 총 개수 출력

function isRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}
