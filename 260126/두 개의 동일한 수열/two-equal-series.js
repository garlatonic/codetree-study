const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.
function isSameArr(arr1, arr2) {
    arr1.sort();
    arr2.sort();

    return arr1.filter((el, index) => el === arr2[index]).length === arr2.length ? "Yes" : "No";
}

console.log(isSameArr(a, b))