const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

console.log(arr.join(" "))