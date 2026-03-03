const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

const result = [0, ...arr];
function heapSort(arr, n) {
    for (let i = Math.floor(n / 2); i >= 1; i--) {
        heapify(arr, n, i);
    }
    for (let i = n; i > 1; i--) {
        [arr[1], arr[i]] = [arr[i], arr[1]];
        heapify(arr, i - 1, 1);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    let l = i * 2;
    let r = i * 2 + 1;

    if (l <= n && arr[l] > arr[largest]) largest = l;
    if (r <= n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

heapSort(result, n - 1);
console.log(result.slice(1).join(" "))