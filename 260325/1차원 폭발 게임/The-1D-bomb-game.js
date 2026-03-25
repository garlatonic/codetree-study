const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input.slice(1, Number(n) + 1).map(Number).reverse();

// Please Write your code here.
while (true) {
  let isExploded = false;

  let i = 0;
  while (i < numbers.length) {
    const num = numbers[i];

    let j = i + 1;
    while (j < numbers.length && num === numbers[j]) {
      j++;
    }

    const length = j - i;
    if (length >= m) {
      isExploded = true;
      numbers.splice(i, length);
    } else {
      i = j;
    }
  }

  if (!isExploded) break;
}

// 최종적으로 남게 된 폭탄의 개수
console.log(numbers.length);
numbers.reverse().map((num) => console.log(num));