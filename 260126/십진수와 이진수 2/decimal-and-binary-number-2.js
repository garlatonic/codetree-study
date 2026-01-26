const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 
function dtb(n) {
    const result = [];

    while (true) {
        if (n < 2) {
            result.push(n);
            break;
        }

        result.push(n % 2);
        n = Math.floor(n / 2);
    }

    return result.reverse().join("");
}

function btod(n) {
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        result = result * 2 + n[i] * 1;
    }

    return result;
}

const answer = dtb(btod(binaryInput) * 17);
console.log(answer);
