const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number)).flat();

// Please Write your code here.
const sortedMap = points
  .map((point, index) => ({ index: index + 1, point }))
  .sort((a, b) => {
    if (a.point === b.point) return a.index - b.index;
    return a.point - b.point;
  });

const result = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const index = sortedMap[i].index;
  result[index - 1] = i + 1;
}

console.log(result.join(" "));