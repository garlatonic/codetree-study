const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0;

const T = Number(input[idx++]);

// 내부 격자에서의 속도 (0.5 대신 1 단위)
const dy = [0, -1, 1, 0]; // L, D, U, R 순서에 맞춰 수정
const dx = [-1, 0, 0, 1];
const mapper = { L: 0, D: 1, U: 2, R: 3 };

const MAX_TIME = 4000;

for (let tc = 0; tc < T; tc++) {
  const N = Number(input[idx++]);

  // X, Y는 입력 좌표 * 2 (정수 격자)
  const marbles = [];
  for (let num = 1; num <= N; num++) {
    const [sx, sy, sw, sd] = input[idx++].trim().split(" ");
    const x = Number(sx) * 2;
    const y = Number(sy) * 2;
    const w = Number(sw);
    const d = mapper[sd[0]];

    marbles.push({ x, y, w, d, num }); // num = 번호 (1부터)
  }

  const events = []; // [time, i, j, X, Y]

  // 구슬 쌍마다 충돌 시간 계산
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const m1 = marbles[i];
      const m2 = marbles[j];

      const X1 = m1.x;
      const Y1 = m1.y;
      const X2 = m2.x;
      const Y2 = m2.y;

      const VX1 = dx[m1.d];
      const VY1 = dy[m1.d];
      const VX2 = dx[m2.d];
      const VY2 = dy[m2.d];

      const dVX = VX1 - VX2;
      const dVY = VY1 - VY2;

      let t = -1;
      let colX = 0;
      let colY = 0;

      // 상대 속도가 0,0이면 영원히 평행 → 충돌 없음
      if (dVX === 0 && dVY === 0) continue;

      // 일반 케이스: 두 축 모두 상대속도가 있음
      if (dVX !== 0 && dVY !== 0) {
        const numX = X2 - X1;
        const numY = Y2 - Y1;

        if (numX % dVX !== 0 || numY % dVY !== 0) continue;

        const tX = numX / dVX;
        const tY = numY / dVY;

        if (tX === tY && tX > 0 && tX <= MAX_TIME) {
          t = tX;
          colX = X1 + VX1 * t;
          colY = Y1 + VY1 * t;
        }
      }
      // x 방향 상대속도만 있음
      else if (dVX !== 0 && dVY === 0) {
        if (Y1 !== Y2) continue; // y 좌표 같아야 만날 수 있음

        const numX = X2 - X1;
        if (numX % dVX !== 0) continue;

        const tX = numX / dVX;
        if (tX > 0 && tX <= MAX_TIME) {
          t = tX;
          colX = X1 + VX1 * t;
          colY = Y1;
        }
      }
      // y 방향 상대속도만 있음
      else if (dVX === 0 && dVY !== 0) {
        if (X1 !== X2) continue; // x 좌표 같아야 만날 수 있음

        const numY = Y2 - Y1;
        if (numY % dVY !== 0) continue;

        const tY = numY / dVY;
        if (tY > 0 && tY <= MAX_TIME) {
          t = tY;
          colX = X1;
          colY = Y1 + VY1 * t;
        }
      }

      if (t === -1) continue;

      events.push([t, i, j, colX, colY]);
    }
  }

  // 시간 기준 정렬
  events.sort((a, b) => a[0] - b[0]);

  // 살아 있는지 여부
  const alive = Array(N).fill(true);
  let lastCrashTime = -1;

  // time -> 해당 시각의 이벤트 리스트
  const eventMap = new Map();
  for (const [t, i, j, X, Y] of events) {
    if (!eventMap.has(t)) eventMap.set(t, []);
    eventMap.get(t).push([i, j, X, Y]);
  }

  const times = Array.from(eventMap.keys()).sort((a, b) => a - b);

  for (const t of times) {
    const evs = eventMap.get(t);

    // 같은 시간 t에서 위치별로 구슬 모으기
    const posMap = new Map(); // "X,Y" -> idx 배열

    for (const [i, j, X, Y] of evs) {
      if (!alive[i] && !alive[j]) continue;

      const key = `${X},${Y}`;
      const arr = posMap.get(key) || [];

      if (alive[i]) arr.push(i);
      if (alive[j]) arr.push(j);

      posMap.set(key, arr);
    }

    // 이 시간에 실제로 같은 위치에 모인 그룹들 처리
    posMap.forEach((indices, key) => {
      // 같은 위치에 2개 이상 살아 있어야 충돌
      const uniq = [...new Set(indices)].filter((id) => alive[id]);
      if (uniq.length <= 1) return;

      // 가장 무거운 구슬, 같으면 번호 큰 구슬이 살아남는다
      let survivor = -1;
      let maxWeight = -1;
      let maxNumber = -1;

      for (const id of uniq) {
        const { w, num } = marbles[id];
        if (w > maxWeight || (w === maxWeight && num > maxNumber)) {
          maxWeight = w;
          maxNumber = num;
          survivor = id;
        }
      }

      // 나머지는 제거
      let removed = false;
      for (const id of uniq) {
        if (id !== survivor && alive[id]) {
          alive[id] = false;
          removed = true;
        }
      }

      if (removed) {
        lastCrashTime = Math.max(lastCrashTime, t);
      }
    });
  }

  console.log(lastCrashTime);
}
