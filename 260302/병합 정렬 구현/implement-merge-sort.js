const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const mergeArr = [];

function mergeSort(arr, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

function merge(arr, low, mid, high) {
    let i = low, j = mid + 1;

    let k = low;
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            mergeArr[k] = arr[i];
            k += 1;
            i += 1;
        } else {
            mergeArr[k] = arr[j];
            k += 1;
            j += 1;
        }
    }

    while (i <= mid) {
        mergeArr[k] = arr[i];
        k += 1;
        i += 1;
    }

    while (j <= high) {
        mergeArr[k] = arr[j];
        k += 1;
        j += 1;
    }

    for (let l = low; l <= high; l++) {
        arr[l] = mergeArr[l];
    }
}

mergeSort(arr, 0, n - 1);
console.log(arr.join(" "));