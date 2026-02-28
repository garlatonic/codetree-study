const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.
function radixSort(array, k) {
    for (let pos = k - 1; pos >= 0; pos--) {
        const newArr = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < array.length; i++) {
            const digit = Math.floor((array[i] / Math.pow(10, pos)) % 10);
            newArr[digit].push(array[i]);
        }

        const storeArr = [];
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < newArr[i].length; j++) {
                storeArr.push(newArr[i][j]);
            }
        }

        array = storeArr;
    }
    return array;
}

const k = Math.max(...arr).toString().length;
const result = radixSort(arr, k).join(" ");
console.log(result)