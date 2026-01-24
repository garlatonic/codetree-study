const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

let sum = 0;
for (let i = A; i <= B; i++) {
    if (isPrime(i)) sum += i;
}

console.log(sum)