const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

function formatA(n, a) {
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        result = result * a + n[i] * 1;
    }

    return result;
}

function formatB(n, b) {
    const result = [];
    while (1) {
        if (n < b) {
            result.push(n);
            break;
        }

        result.push(n % b);
        n = Math.floor(n / b)
    }
    return result.reverse().join("");
}

const answer = formatB(formatA(n.toString(), a), b)
console.log(answer)