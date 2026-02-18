const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let result = 0;
for (let x = Math.max(...a); x <= a.reduce((acc, cur) => acc + cur, 0); x++) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (sum + a[i] > x) {
            count++;
            sum = a[i];
        } else {
            sum += a[i];
        }
    }

    if(count + 1 <= m) {
        result = x;
        break;
    }
}
console.log(result)