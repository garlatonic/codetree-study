const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, Q] = input[0].split(" ").map(Number);
const board = input.slice(1, 1 + N).map((line) => line.trim().split(" ").map(Number));
const winds = input
  .slice(1 + N, 1 + N + Q)
  .map((line) => line.split(" ").map(Number));

const dxs = [-1, 0, 1, 0];
const dys = [0, 1, 0, -1];

function inRange(nx, ny) {
  return 0 <= nx && nx < N && 0 <= ny && ny < M;
}

function deepCopy(b) {
  return b.map((row) => [...row]);
}

for (let w = 0; w < Q; w++) {
  let [r1, c1, r2, c2] = winds[w];
  r1--;
  c1--;
  r2--;
  c2--;

  const grid = Array.from({ length: N }, () => Array(M).fill(0));

  // 가장자리 회전
  for (let j = c1; j < c2; j++) {
    grid[r1][j + 1] = board[r1][j]; // 윗변
    grid[r2][j] = board[r2][j + 1]; // 아랫변
  }
  for (let i = r1; i < r2; i++) {
    grid[i + 1][c2] = board[i][c2]; // 오른변
    grid[i][c1] = board[i + 1][c1]; // 왼변
  }

  // 회전 결과 board에 반영 (내부 제외)
  for (let i = r1; i <= r2; i++) {
    for (let j = c1; j <= c2; j++) {
      if (r1 + 1 <= i && i <= r2 - 1 && c1 + 1 <= j && j <= c2 - 1) continue;
      board[i][j] = grid[i][j];
    }
  }

  // 평균 업데이트
  const newBoard = deepCopy(board);
  for (let i = r1; i <= r2; i++) {
    for (let j = c1; j <= c2; j++) {
      let ans = 1;
      for (let k = 0; k < 4; k++) {
        const ni = i + dxs[k];
        const nj = j + dys[k];
        if (inRange(ni, nj)) {
          ans++;
          newBoard[i][j] += board[ni][nj];
        }
      }
      newBoard[i][j] = Math.floor(newBoard[i][j] / ans);
    }
  }

  // board 업데이트
  for (let i = 0; i < N; i++) board[i] = [...newBoard[i]];
}

console.log(board.map((row) => row.join(" ")).join("\n"));
