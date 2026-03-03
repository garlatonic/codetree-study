const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

// Please Write your code here.
function partition(arr, low, high) {
    let pivot = selectPivot(arr, high);
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i += 1;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pos = partition(arr, low, high);

        quickSort(arr, low, pos - 1);
        quickSort(arr, pos + 1, high);
    }
}

function selectPivot(arr, high) {
    return arr[high];
}

quickSort(arr, 0, n - 1);
console.log(arr.join(" "));