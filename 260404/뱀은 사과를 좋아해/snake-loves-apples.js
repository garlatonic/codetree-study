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

const appleSet = new Set(apples.map(([y, x]) => `${y},${x}`));
const snake = [[0, 0]];
const snakeSet = new Set(["0,0"]);

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let time = 0;

for (const { d, p } of routes) {
    const dir = direction(d);
    for (let i = 0; i < p; i++) {
        time++;
        const [headY, headX] = snake[0];
        const newY = headY + dy[dir];
        const newX = headX + dx[dir];
        const key = `${newY},${newX}`;

        // 경로 이탈시 종료
        if (!isRange(newY, newX)) {
            console.log(time);
            process.exit(0);
        }

        const willEatApple = appleSet.has(key);
        const tailKey = !willEatApple
            ? `${snake[snake.length - 1][0]},${snake[snake.length - 1][1]}`
            : null;

        // 충돌 판정: 사과를 먹지 않는 경우에는 빠질 꼬리 자리는 예외
        if (snakeSet.has(key) && key !== tailKey) {
            console.log(time);
            process.exit(0);
        }

        if (willEatApple) {
            appleSet.delete(key);
            snake.unshift([newY, newX]);
            snakeSet.add(key);
        } else {
            const [ty, tx] = snake.pop();
            snakeSet.delete(`${ty},${tx}`);
            snake.unshift([newY, newX]);
            snakeSet.add(key);
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
