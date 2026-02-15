const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);
// Please Write your code here.
numbers.sort((a, b) => a - b);

const result = [];
let isCorrect = false;
for (let a = 1; a <= 40; a++) {
    for (let b = a; b <= 40; b++) {
        for (let c = b; c <= 40; c++) {
            for (let d = c; d <= 40; d++) {
                const answer = [];

                answer.push(a, b, c, d)
                answer.push(a + b, b + c, c + d, d + a, a + c, b + d);
                answer.push(a + b + c, a + b + d, a + c + d, b + c + d);
                answer.push(a + b + c + d);
                answer.sort((a, b) => a - b);

                isCorrect = answer.every((value, index) => value === numbers[index]);

                if (isCorrect) {
                    result.push(a, b, c, d);
                    break;
                };
            }
            if (isCorrect) break;
        }
        if (isCorrect) break;
    }
    if (isCorrect) break;
}

console.log(result.join(" "));