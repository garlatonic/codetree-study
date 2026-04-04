const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const apples = input.slice(1, 1 + M).map((line) => {
    const [y, x] = line.trim().split(" ").map(Number);
    return [y - 1, x - 1];
});
const routes = input.slice(1 + M, 1 + M + K).map((line) => {
    const [d, p] = line.trim().split(" ");
    return { d, p: Number(p) };
});

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const snake = [[0, 0]];
let time = 0;

for (const { d, p } of routes) {
    const dir = direction(d);
    for (let i = 0; i < p; i++) {
        time++;
        const [headY, headX] = snake[0];
        const newY = headY + dy[dir];
        const newX = headX + dx[dir];

        if (
            !isRange(newY, newX) ||
            snake.some(([y, x]) => y === newY && x === newX)
        ) {
            console.log(time);
            process.exit(0);
        }
        if (apples.some(([y, x]) => y === newY && x === newX)) {
            // 사과 먹음
            apples.splice(
                apples.findIndex(([y, x]) => y === newY && x === newX),
                1,
            );
            // 새로운 좌표 추가 (길이 늘어남)
            snake.unshift([newY, newX]);
        } else {
            // 길이가 늘어나지 않으므로 1칸씩 이동
            snake.pop();
            snake.unshift([newY, newX]);
        }
    }
}

console.log(time);

function isRange(r, c) {
    return 0 <= r && r < N && 0 <= c && c < N;
}
function direction(d) {
    switch (d) {
        case "U":
            return 0;
        case "D":
            return 1;
        case "L":
            return 2;
        case "R":
            return 3;
    }
}
