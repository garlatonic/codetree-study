const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
let [r, c] = input[1 + n].split(" ").map(Number);
r--;
c--;

// Please Write your code here.
const bombSize = grid[r][c] - 1;

// 세로로 터진 줄 잡기
for (let y = r - bombSize; y <= r + bombSize; y++) {
  if (!isValid(y, c)) continue;
  grid[y][c] = 0;
}

// 가로로 터진 줄 잡기
for (let x = c - bombSize; x <= c + bombSize; x++) {
  if (!isValid(r, x)) continue;
  grid[r][x] = 0;
}

// 터진 줄을 기준으로 나무가 떨어짐
const board = Array.from({ length: n }, () => Array(n).fill(0));
for (let x = 0; x < n; x++) {
  let idx = n - 1;
  for (let y = n - 1; y >= 0; y--) {
    if (grid[y][x] !== 0) {
      board[idx][x] = grid[y][x];
      idx--;
    }
  }
}

board.forEach((line) => console.log(line.join(" ")));

function isValid(y, x) {
  return 0 <= y && y < n && 0 <= x && x < n;
}
