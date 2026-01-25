const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

let textArr = text.split("");
let patternArr = pattern.split("");
const isPartialString = () => {
  while (textArr.length >= patternArr.length) {
    const startIndex = textArr.indexOf(patternArr[0]);
    if (startIndex === -1) return false;
    const sliceArr = textArr.slice(startIndex, startIndex + patternArr.length);
    if (JSON.stringify(sliceArr) === JSON.stringify(patternArr)) return true;
    else textArr.splice(startIndex, 1);
  }
  return false;
};
// 포함하면 포함하는 문자열의 첫글짜의 시작인덱스, 포함하지 않으면 -1
console.log(isPartialString() ? text.indexOf(pattern) : -1);