const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const grid = input.slice(0, 4).map((line) => line.split(" ").map(Number));
const dir = input[4];

// Please Write your code here.
function moveLine(arr) {
  arr = arr.filter((v) => v !== 0);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      arr[i + 1] = 0;
      i++;
    }
  }

  arr = arr.filter((v) => v !== 0);
  while (arr.length < 4) arr.push(0);
  return arr;
}

if (dir === "L") {
  for (let r = 0; r < 4; r++) {
    grid[r] = moveLine(grid[r]);
  }
} else if (dir === "R") {
  for (let r = 0; r < 4; r++) {
    grid[r] = moveLine(grid[r].reverse()).reverse();
  }
} else if (dir === "U") {
  // 열 추출해서 처리
  for (let c = 0; c < 4; c++) {
    let col = [];
    for (let r = 0; r < 4; r++) {
      col.push(grid[r][c]);
    }

    col = moveLine(col);

    for (let r = 0; r < 4; r++) {
      grid[r][c] = col[r];
    }
  }
} else if (dir === "D") {
  for (let c = 0; c < 4; c++) {
    let col = [];
    for (let r = 0; r < 4; r++) {
      col.push(grid[r][c]);
    }

    col = moveLine(col.reverse()).reverse();

    for (let r = 0; r < 4; r++) {
      grid[r][c] = col[r];
    }
  }
}

grid.forEach((row) => console.log(row.join(" ")));
