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
const candies = new Array(301).fill(0);
baskets.forEach(([candy, position]) => {
    candies[position] += candy;
})

let maxSum = 0;
for (let center = 0; center < candies.length; center++) {
    const start = Math.max(0, center - k);
    const end = Math.min(candies.length - 1, center + k);

    const slice = candies.slice(start, end + 1);
    const sum = slice.reduce((acc, cur) => acc + cur, 0);

    maxSum = Math.max(sum, maxSum)
}

console.log(maxSum);