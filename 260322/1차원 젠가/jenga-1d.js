const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);
const [s1, e1] = input[n + 1].split(' ').map(Number);
const [s2, e2] = input[n + 2].split(' ').map(Number);

// Please write your code here.
const first = popZenga(blocks, s1, e1);
const second = popZenga(first, s2, e2);

console.log(second.length);
console.log(second.join("\n"));

function popZenga(blocks, s, e) {
  const left = [];
  for (let i = 0; i < blocks.length; i++) {
    if (s - 1 <= i && i <= e - 1) continue
    left.push(blocks[i])
  }
  return left;
}