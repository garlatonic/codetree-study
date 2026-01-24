const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
// 최소공배수를 구하려면 최대공약수가 필요함
const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}
console.log(lcm(n, m));