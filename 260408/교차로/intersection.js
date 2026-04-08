const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const events = [];
for (let i = 1; i <= N; i++) {
  const [time, w] = input[i].split(" ");
  events.push({ time: Number(time), w });
}

// Please Write your code here.
const dir = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
};

const q = Array.from({ length: 4 }, () => []);
for (let i = 0; i < N; i++) {
  const event = events[i];
  q[dir[event.w]].push({ index: i + 1, ...event });
}

let t = 0;
const result = Array(N).fill(-1);
while (true) {
  if (q.every((e) => e.length === 0)) break;

  // 현재 시간 t에서 교차로 앞에 있는 차량들 체크
  const c = Array(4).fill(false);
  for (let d = 0; d < 4; d++) {
    if (q[d].length > 0 && q[d][0].time <= t) {
      c[d] = true;
    }
  }

  const count = c.filter((e) => e).length;
  // 다음 시간으로 점프
  if (count === 0) {
    let nextTime = Infinity;
    for (let d = 0; d < 4; d++) {
      if (q[d].length > 0) {
        nextTime = Math.min(nextTime, q[d][0].time);
      }
    }
    t = nextTime;
    continue;
  }

  if (count === 4) {
    // 4방향 모두 차량이 있는 경우에는 교착상태 발생
    break;
  }

  const passed = [];
  for (let d = 0; d < 4; d++) {
    const right = (d + 3) % 4;
    if (c[d] && !c[right]) {
      const car = q[d].shift();
      result[car.index - 1] = t;
      passed.push(car);
    }
  }

  if (passed.length > 0) t++;
}

console.log(result.join("\n"));
