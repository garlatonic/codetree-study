const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

// Please Write your code here.
people.sort((a, b) => a.pos - b.pos);

let maxDistance = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        const selected = people.slice(i, j + 1);
        const distance = selected[selected.length - 1].pos - selected[0].pos;

        const filterG = selected.filter((select) => select.letter === "G");
        const filterH = selected.filter((select) => select.letter === "H");

        if (selected.length === filterG.length || selected.length === filterH.length || filterG.length === filterH.length) {
            maxDistance = Math.max(maxDistance, distance);
        }
    }
}

console.log(maxDistance)