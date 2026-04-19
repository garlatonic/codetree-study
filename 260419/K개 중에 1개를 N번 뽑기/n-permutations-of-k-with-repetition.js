const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

// Please write your code here.
let answer = [];
function chooseNum(num) {
    if (answer.length === n) {
        console.log(answer.join(" "));
        return;
    }

    for (let i = 1; i <= k; i++) {
        answer.push(i);
        chooseNum(num + 1);
        answer.pop();
    }
}

chooseNum(1);