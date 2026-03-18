const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
function isAllPositive(y1, x1, y2, x2) {
  let isPositive = true;

  for (let y = y1; y <= y2; y++) {
    if (!isPositive) break;

    isPositive = grid[y - 1].slice(x1 - 1, x2).every((el) => el > 0);
  }

  return isPositive;
}

let maxSize = -1;
for (let y1 = 1; y1 <= n; y1++) {
  for (let x1 = 1; x1 <= m; x1++) {
    for (let y2 = y1; y2 <= n; y2++) {
      for (let x2 = x1; x2 <= m; x2++) {
        if (!isAllPositive(y1, x1, y2, x2)) continue;

        maxSize = Math.max(maxSize, (y2 - y1 + 1) * (x2 - x1 + 1));
      }
    }
  }
}

console.log(maxSize);