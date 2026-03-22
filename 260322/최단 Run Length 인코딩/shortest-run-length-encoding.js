const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const A = input[0].split("");

// Please Write your code here.
let minLength = A.length;

for (let shift = 0; shift < A.length; shift++) {
  // shift된 문자열 만들기
  const last = A[A.length - 1];
  for (let i = A.length - 1; i > 0; i--) {
    A[i] = A[i - 1];
  }
  A[0] = last;

  // Run-length encoding 적용

  // 첫번째 문자는 세었다고 가정
  let compressed = A[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      count++;
    } else {
      compressed += count + A[i];
      count = 1; // 카운트 초기화
    }
  }
  // 마지막 문자 처리
  compressed += count; // 마지막 문자 개수 추가

  minLength = Math.min(minLength, compressed.length);
}

console.log(minLength);
