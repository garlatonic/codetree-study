const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

// Please Write your code here.
a.sort((a, b) => b - a);

let result = 0;
for (let h = Math.max(...a); h >= Math.min(...a); h--) {
    let hCount = 0;
    let lCount = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] >= h) {
            hCount += 1;
        } else if (a[i] + 1 === h && lCount < l) {
            lCount += a[i] + 1 === h ? 1 : 0;
            hCount += 1;
        }
    }

    if(h <= hCount) {
        result = h;
        break;
    }
}

console.log(result)