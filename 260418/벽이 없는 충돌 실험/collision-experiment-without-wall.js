const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;
let T = Number(input[idx++]);

const dy = [0, -1, 1, 0];
const dx = [-1, 0, 0, 1];
const mapper = { L: 0, D: 1, U: 2, R: 3 };

const MAX_TIME = 4000;

for (let tc = 0; tc < T; tc++) {
  let N = Number(input[idx++]);
  let marbles = [];
  for (let i = 0; i < N; i++) {
    let [x, y, w, d] = input[idx++].trim().split(" ");
    x = Number(x) * 2;
    y = Number(y) * 2;
    w = Number(w);
    d = mapper[d];

    marbles.push([x, y, w, d, i + 1]);
  }

  const events = []; // time, i, j, colX, colY

  // 구슬 쌍마다 충돌 시간을 계산
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const m1 = marbles[i];
      const m2 = marbles[j];

      const [X1, Y1, W1, D1, N1] = m1;
      const [X2, Y2, W2, D2, N2] = m2;

      const VX1 = dx[D1];
      const VY1 = dy[D1];
      const VX2 = dx[D2];
      const VY2 = dy[D2];

      const dVX = VX1 - VX2;
      const dVY = VY1 - VY2;

      let t = -1;
      let colX = 0;
      let colY = 0;

      // 상대속도가 0이면 충돌이 없음
      if (dVX === 0 && dVY === 0) continue;

      // 두 축의 방향이 수직일 때
      if (dVX !== 0 && dVY !== 0) {
        const numX = X2 - X1;
        const numY = Y2 - Y1;

        // 충돌 시간이 양수, 두 축의 충돌시간이 같아야함
        if (numX % dVX !== 0 || numY % dVY !== 0) continue;

        const tX = numX / dVX;
        const tY = numY / dVY;
        if (tX === tY && 0 < tX && tX <= MAX_TIME) {
          t = tX;
          colX = X1 + VX1 * t;
          colY = Y1 + VY1 * t;
        }
      } else if (dVX !== 0 && dVY === 0) {
        // 같은 y축을 타고 x축에서 충돌
        if (Y1 !== Y2) continue; // 같은 y좌표여야 충돌 가능

        const numX = X2 - X1;
        // 충돌 시간이 양수여야함
        if (numX % dVX !== 0) continue;

        const tX = numX / dVX;
        if (0 < tX && tX <= MAX_TIME) {
          t = tX;
          colX = X1 + VX1 * t;
          colY = Y1;
        }
      } else if (dVX === 0 && dVY !== 0) {
        // 같은 x축을 타고 y축에서 충돌
        if (X1 !== X2) continue; // 같은 y좌표여야 충돌 가능

        const numY = Y2 - Y1;
        // 충돌 시간이 양수여야함
        if (numY % dVY !== 0) continue;

        const tY = numY / dVY;
        if (0 < tY && tY <= MAX_TIME) {
          t = tY;
          colX = X1;
          colY = Y1 + VY1 * t;
        }
      }

      if (t === -1) continue; // 충돌이 일어나지 않음
      events.push([t, i, j, colX, colY]);
    }
  }

  // 시간 기준으로 정렬
  events.sort((a, b) => a[0] - b[0]);

  // 구슬 생사여부
  const alive = Array(N).fill(true);
  let lastTime = -1;

  const eventMap = new Map();
  for (const [t, i, j, colX, colY] of events) {
    if (!eventMap.has(t)) eventMap.set(t, []);
    eventMap.get(t).push([i, j, colX, colY]);
  }

  // 시간순 배열로 만들기
  const times = Array.from(eventMap.keys()).sort((a, b) => a - b);
  for (const t of times) {
    const evs = eventMap.get(t);

    // 같은 시간에 위치별로 구슬 모으기
    const posMap = new Map(); // "X,Y"
    for (const [i, j, colX, colY] of evs) {
      if (!alive[i] && !alive[j]) continue; // 두 구슬 모두 생존해 있을 때만

      const key = `${colX},${colY}`;
      const arr = posMap.get(key) || [];

      if (alive[i]) arr.push(i);
      if (alive[j]) arr.push(j);

      posMap.set(key, arr);
    }

    // 시간 t에 같은 위치에 있는 구슬들 처리하기
    posMap.forEach((v) => {
      // 같은 위치에 2개 이상 살아있다면 충돌처리
      const uniq = [...new Set(v)].filter((m) => alive[m]);
      if (uniq.length <= 1) return;

      uniq.sort((a, b) => {
        const W1 = marbles[a][2];
        const W2 = marbles[b][2];

        if (W1 !== W2) return W2 - W1;
        return b - a;
      });

      // 0번째가 살아남은 구슬이고 나머지는 제거
      let removed = false;
      for (let i = 1; i < uniq.length; i++) {
        const m = uniq[i];
        if (!alive[m]) continue;
        alive[m] = false;
        removed = true;
      }

      if (removed) lastTime = t;
    });
  }

  console.log(lastTime);
}
