const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let answer = -Infinity;

// 구간합을 통한 직사각형 넓이 구하기
function rectSum(y1, x1, y2, x2) {
  return (
    prefix[y2][x2] -
    prefix[y1 - 1][x2] -
    prefix[y2][x1 - 1] +
    prefix[y1 - 1][x1 - 1]
  );
}

// 구간합 배열 생성
const prefix = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
for (let y = 1; y <= n; y++) {
  for (let x = 1; x <= m; x++) {
    prefix[y][x] =
      prefix[y - 1][x] +
      prefix[y][x - 1] -
      prefix[y - 1][x - 1] +
      grid[y - 1][x - 1];
  }
}

// Case1: 세로로 나눴을 때 (y축에 평행이 되도록 나눴을 때)
for (let cutX = 1; cutX < m; cutX++) {
  let maxLeft = -Infinity;
  let maxRight = -Infinity;

  for (let y1 = 1; y1 <= n; y1++) {
    for (let x1 = 1; x1 <= cutX; x1++) {
      for (let y2 = y1; y2 <= n; y2++) {
        for (let x2 = x1; x2 <= cutX; x2++) {
          const sum = rectSum(y1, x1, y2, x2);
          maxLeft = Math.max(maxLeft, sum);
        }
      }
    }
  }
  for (let y1 = 1; y1 <= n; y1++) {
    for (let x1 = cutX + 1; x1 <= m; x1++) {
      for (let y2 = y1; y2 <= n; y2++) {
        for (let x2 = x1; x2 <= m; x2++) {
          const sum = rectSum(y1, x1, y2, x2);
          maxRight = Math.max(maxRight, sum);
        }
      }
    }
  }

  answer = Math.max(answer, maxLeft + maxRight);
}

// Case2: 가로로 나눴을 때 (x축에 평행이 되도록 나눴을 때)
for (let cutY = 1; cutY < n; cutY++) {
  let maxTop = -Infinity;
  let maxBottom = -Infinity;

  for (let y1 = 1; y1 <= cutY; y1++) {
    for (let x1 = 1; x1 <= m; x1++) {
      for (let y2 = y1; y2 <= cutY; y2++) {
        for (let x2 = x1; x2 <= m; x2++) {
          const sum = rectSum(y1, x1, y2, x2);
          maxTop = Math.max(maxTop, sum);
        }
      }
    }
  }
  for (let y1 = cutY + 1; y1 <= n; y1++) {
    for (let x1 = 1; x1 <= m; x1++) {
      for (let y2 = y1; y2 <= n; y2++) {
        for (let x2 = x1; x2 <= m; x2++) {
          const sum = rectSum(y1, x1, y2, x2);
          maxBottom = Math.max(maxBottom, sum);
        }
      }
    }
  }

  answer = Math.max(answer, maxTop + maxBottom);
}

console.log(answer);
