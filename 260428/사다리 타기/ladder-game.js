const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lines = input.slice(1, 1 + m).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const first = simulation(lines);

let minLines = m;
const removed = Array(m).fill(false);

function dfs(idx, count) {
    if (idx === m) {
        const remain = [];
        for (let i = 0; i < m; i++) {
            if (!removed[i]) remain.push(lines[i]);
        }
        if (simulation(remain).toString() === first.toString()) {
            minLines = remain.length;
        }
        return;
    }

    removed[idx] = false;
    dfs(idx + 1, count);

    removed[idx] = true;
    dfs(idx + 1, count + 1);
}

dfs(0, 0);
console.log(minLines);

// 사다리 시뮬레이션 함수
function simulation(lines) {
    const result = [];
    const depthMap = new Map();
    const sorted = [...lines].sort((a, b) => a[1] - b[1]);
    sorted.forEach(([a, b]) => {
        if (!depthMap.has(b)) {
            depthMap.set(b, []);
        }
        depthMap.get(b).push(a);
    });

    // 가장 깊은 위치
    const maxDepth = sorted[sorted.length - 1] ? sorted[sorted.length - 1][1] : 0;

    for (let i = 1; i <= n; i++) {
        let depth = 1;
        let pos = i;
        // 맨 마지막 깊이까지 이동

        while (depth <= maxDepth) {
            if (depthMap.has(depth)) {
                const aList = depthMap.get(depth);
                aList.forEach((a) => {
                    if (pos === a) {
                        // 오른쪽으로 이동
                        pos = a + 1;
                    } else if (pos === a + 1) {
                        // 왼쪽으로 이동
                        pos = a;
                    }
                });
            }
            depth++;
        }

        result.push(pos);
    }

    return result;
}
