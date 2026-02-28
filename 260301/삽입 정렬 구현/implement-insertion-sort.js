const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function insertSort(array) {
    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        while (array[j] > key) {
            if (j < 0) break;

            array[j + 1] = array[j];
            j--
        }

        array[j + 1] = key;
    }

    return array;
}

const result = insertSort(arr).join(" ");
console.log(result)