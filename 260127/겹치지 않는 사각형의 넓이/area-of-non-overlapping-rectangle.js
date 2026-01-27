const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const OFFSET = 1000;
const MAX_R = 2001;

const area = Array.from({ length: MAX_R }).map(() => Array(MAX_R).fill(false));

function getArea(coord, operation) {
    let [x1, y1, x2, y2] = coord;
    [x1, y1, x2, y2] = [x1 + OFFSET, y1 + OFFSET, x2 + OFFSET, y2 + OFFSET];

    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            if (operation === "minus") area[y][x] = 0;
            else area[y][x] = 1;
        }
    }
}

getArea(rectA, "add");
getArea(rectB, "add");
getArea(rectM, "minus");

console.log(area.flat().filter((el) => el > 0).length)