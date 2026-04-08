const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = +input[0]; // 식당의 수
const cust = input[1].split(" ").map(Number); // 각 식당에 있는 고객의 수
const [ldr, mbr] = input[2].split(" ").map(Number);
// ldr: 검사팀장이 검사할 수 있는 최대 고객의 수
// mbr: 검사팀원이 검사할 수 있는 최대 고객의 수

let count = 0;
for (let i = 0; i < n; i++) {
  let c = cust[i]; // 현재 식당에 있는 고객

  // 가게당 팀장은 1명씩 무조건 필요
  c -= ldr;
  count += 1;
  if (c <= 0) continue;
  count += Math.ceil(c / mbr);
}

console.log(count);
