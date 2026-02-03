const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}

// Please Write your code here.
const candies = new Array(201).fill(0);
baskets.forEach(([candy, position]) => {
    candies[position] = candy;
})

let maxSum = 0;
for (let center = k; center < candies.length - k; center++) {
    const start = center - k;
    const end = center + k;

    const slice = candies.slice(start, end + 1);
    const sum = slice.reduce((acc, cur) => acc + cur, 0);

    maxSum = Math.max(sum, maxSum)
}

console.log(maxSum);