const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.
let count = 0;
for(let i = x; i <= y; i++) {
    const iStr = i.toString();
    const iMap = new Map();

    for(let j = 0; j < iStr.length; j++) {
        iMap.set(iStr[j], (iMap.get(iStr[j]) || 0) + 1);
    }

    if(iMap.size !== 2) continue;

    let isInterested = false;
    iMap.forEach((v, k) => {
        if(v === 1) isInterested = true;
    })

    if(isInterested) count++;
}
console.log(count)