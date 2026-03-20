const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, q] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const winds = input
  .slice(1 + n, 1 + n + q)
  .map((line) => line.split(" ").map(Number));

// Please Write your code here.
for (let w = 0; w < q; w++) {
  const [r1, c1, r2, c2] = winds[w]; // 여기서 r1, c1, r2, c2는 1-index

  // 가장자리만 돌리기
  shiftGrid(r1, c1, r2, c2);

  // 복사본 생성
  const copy = createCopyGrid();

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, 1, -1];

  for (let y = r1 - 1; y < r2; y++) {
    for (let x = c1 - 1; x < c2; x++) {
      let sum = copy[y][x];
      let count = 1;

      for (let d = 0; d < 4; d++) {
        if (!isValid(y + dy[d], x + dx[d])) continue;
        sum += copy[y + dy[d]][x + dx[d]];
        count += 1;
      }

      grid[y][x] = Math.floor(sum / count);
    }
  }
}

console.log(grid.join("\n").replaceAll(",", " "));

// 가장자리를 shift하는 함수
function shiftGrid(r1, c1, r2, c2) {
  const lastUp = grid[r1 - 1][c2 - 2];
  const lastDown = grid[r2 - 1][c1];
  const lastLeft = grid[r1 - 1][c1 - 1];
  const lastRight = grid[r2 - 1][c2 - 1];

  for (let i = c2 - 2; i > c1; i--) {
    grid[r1 - 1][i] = grid[r1 - 1][i - 1];
  }
  for (let i = c1; i < c2 - 1; i++) {
    grid[r2 - 1][i] = grid[r2 - 1][i + 1];
  }
  for (let i = r1 - 1; i < r2 - 1; i++) {
    grid[i][c1 - 1] = grid[i + 1][c1 - 1];
  }
  for (let i = r2 - 1; i > r1 - 1; i--) {
    grid[i][c2 - 1] = grid[i - 1][c2 - 1];
  }
  grid[r1 - 1][c1] = lastLeft;
  grid[r1 - 1][c2 - 1] = lastUp;
  grid[r2 - 1][c2 - 2] = lastRight;
  grid[r2 - 1][c1 - 1] = lastDown;
}

// 복사본을 만드는 함수
function createCopyGrid() {
  const copy = Array.from({ length: n }, () => Array(m).fill(-1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      copy[r][c] = grid[r][c];
    }
  }

  return copy;
}

function isValid(y, x) {
  return 0 <= y && y < n && 0 <= x && x < m;
}
