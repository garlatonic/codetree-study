const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
const onJeonSu = (num) => {
    if (num % 2 !== 0 && num % 10 !== 5 && !(num % 3 === 0 && num % 9 !== 0)) return true;
    return false;
}

let count = 0;
for (let i = a; i <= b; i++) {
    if(onJeonSu(i)) count++;
}

console.log(count)