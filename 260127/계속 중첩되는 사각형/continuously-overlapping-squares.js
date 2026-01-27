const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

const OFFSET = 100;
const MAX_R = 201;

const area = Array.from({ length: MAX_R }, () => Array(MAX_R).fill(""));
rectangles.forEach((rectangle, index) => {
    let [x1, y1, x2, y2] = rectangle.map((el) => el + OFFSET);

    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            if (index % 2 === 1) area[y][x] = "blue";
            else area[y][x] = "red";
        }
    }
})

console.log(area.flat().filter((el) => el === "blue").length)