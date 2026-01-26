const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
function formatDecimal() {
    let result = 0;

    for (let i = 0; i < binaryStr.length; i++) {
        result = result * 2 + binaryStr[i] * 1;
    }

    return result;
}

console.log(formatDecimal())