const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// Please Write your code here.
const directions = [
    [0, 1], // 우향
    [1, 0], // 하향
    [1, 1], // 우하향
    [-1, 1], // 우상향
]

function check(y, x, color) {
    for(let [dy, dx] of directions) {
        let count = 1;
        let ny = y + dy;
        let nx = x + dx;

        while(ny >= 0 && ny < 19 && nx >= 0 && nx < 19 && arr[ny][nx] === color) {
            count++;
            ny += dy;
            nx += dx;
        }

        if(count === 5) {
            return [color, y + dy * 2 + 1, x + dx * 2 + 1];
        }
    }

    return null;
}

let rx, ry;
let victory = 0;

for (let y = 0; y < 19; y++) {
    for (let x = 0; x < 19; x++) {
        if(arr[y][x] === 0) continue;

        const result = check(y, x, arr[y][x]);
        if(result) {
            victory = result[0];
            rx = result[2];
            ry = result[1];
        } 
    }

    if(victory > 0) break;
}

if(victory) {
    console.log(victory);
    console.log(ry, rx);
} else {
    console.log(victory);
}