const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
function formatNumber(num, k) {
    const result = [];

    while (true) {
        if (num < k) {
            result.push(num);
            break;
        }

        result.push(num % k);
        num = Math.floor(num / k);
    }

    return result.reverse().join("");
}

console.log(formatNumber(n, b))