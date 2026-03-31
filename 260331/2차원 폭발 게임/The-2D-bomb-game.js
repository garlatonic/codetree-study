const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const numbers2d = input
  .slice(1, Number(n) + 1)
  .map((line) => line.trim().split(" ").map(Number));

// Please Write your code here.
for (let i = 0; i < k; i++) {
  explode();
  rotate();
  explode();
}

console.log(numbers2d.flat().filter((el) => el !== 0).length);

// 시계방향으로 90도 회전 후 중력 적용
function rotate() {
  const board = Array.from({ length: n }, () => Array(n).fill(0));

  for (let c = 0; c < n; c++) {
    for (let r = n - 1; r >= 0; r--) {
      board[c][n - 1 - r] = numbers2d[r][c];
    }
  }

  for (let r = 0; r < n; r++) {
    numbers2d[r] = board[r];
  }

  gravity();
}

function explode() {
  // 연결된 폭탄 그룹을 찾고, 그룹의 크기가 m 이상인 경우 폭발 처리
  for (let x = 0; x < n; x++) {
    const column = [];
    let targetNumber;
    for (let y = 0; y < n; y++) {
      // 현재 좌표의 폭탄 번호
      const value = numbers2d[y][x];

      if (value === 0) {
        // 0인 경우 그룹이 끊긴 것으로 간주
        if (column.length >= m) {
          for (const { y, x } of column) {
            numbers2d[y][x] = 0;
          }
        }
        column.length = 0;
        targetNumber = undefined;
        continue;
      }

      if (targetNumber === undefined) {
        targetNumber = value;
      }
      if (value === targetNumber) {
        column.push({ y, x });
      } else {
        // 다른 번호가 나왔으므로 그룹이 끊긴 것으로 간주
        if (column.length >= m) {
          for (const { y, x } of column) {
            numbers2d[y][x] = 0;
          }
        }
        column.length = 0;
        targetNumber = value;
        column.push({ y, x });
      }
    }

    // 마지막 그룹 체크
    if (column.length >= m) {
      for (const { y, x } of column) {
        numbers2d[y][x] = 0;
      }
    }
  }

  gravity();
}

function gravity() {
  for (let c = 0; c < n; c++) {
    let arr = [];
    for (let r = 0; r < n; r++) {
      arr.push(numbers2d[r][c]);
    }
    arr = arr.reverse().filter((el) => el !== 0);
    while (arr.length < n) {
      arr.push(0);
    }
    arr = arr.reverse();
    for (let r = 0; r < n; r++) {
      numbers2d[r][c] = arr[r];
    }
  }
}
