const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

function gcd(a, b) {
    if (b === 0) return a;

    return gcd(b, a % b);
}

function lcm(arr) {
    // 배열의 길이가 1 이하가 될 때까지 반복
    while (arr.length > 1) {
        // 두 수를 비교하여 큰 수가 앞에 오도록 정렬
        if (arr[0] < arr[1]) {
            [arr[0], arr[1]] = [arr[1], arr[0]];
        }
        const lcm = (arr[0] * arr[1]) / gcd(arr[0], arr[1]);

        arr = arr.slice(1);
        arr[0] = lcm;
    }

    return arr[0];
}
console.log(lcm(numbers));