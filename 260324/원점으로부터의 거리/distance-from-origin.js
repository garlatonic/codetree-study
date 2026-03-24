const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const pointsMap = points.map((point, index) => ({ index: index + 1, dist: Math.abs(point[0]) + Math.abs(point[1]) }))
pointsMap.sort((a, b) => {
  if (a.dist === b.dist) return a.index - b.index;
  return a.dist - b.dist;
}).forEach((point) => {
  console.log(point.index);
});