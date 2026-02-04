const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let maxArea = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            const [x3, y3] = points[k];

            // x좌표가 같은 쌍이 있는지
            const xMatch = (x1 === x2) || (x1 === x3) || (x2 === x3);
            // y좌표가 같은 쌍이 있는지  
            const yMatch = (y1 === y2) || (y1 === y3) || (y2 === y3);

            if (!xMatch && !yMatch) continue;

            let area = 0;
            if (x1 === x2 && y1 === y3) {
                area = Math.abs((y2 - y1) * (x3 - x1));
            } else if (x1 === x2 && y2 === y3) {
                area = Math.abs((y2 - y1) * (x3 - x2));
            } else if (x1 === x3 && y1 === y2) {
                area = Math.abs((y3 - y1) * (x2 - x1));
            } else if (x1 === x3 && y2 === y3) {
                area = Math.abs((y3 - y1) * (x3 - x2));
            } else if (x2 === x3 && y1 === y2) {
                area = Math.abs((y3 - y2) * (x2 - x1));
            } else if (x2 === x3 && y1 === y3) {
                area = Math.abs((y3 - y2) * (x3 - x1));
            }

            maxArea = Math.max(maxArea, area)
        }
    }
}

console.log(maxArea)