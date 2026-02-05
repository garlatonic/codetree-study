const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}
// Please Write your code here.

// 최고 작업량
let maxWork = 0;
for (let t = 0; t <= 1000; t++) {
    let work = 0;

    for (let i = 0; i < n; i++) {
        if (t < ta[i]) work += c;
        else if (ta[i] <= t && t <= tb[i]) work += g;
        else work += h;
    }

    maxWork = Math.max(maxWork, work);
}

console.log(maxWork)