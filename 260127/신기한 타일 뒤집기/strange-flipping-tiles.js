const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const OFFSET = 100000;
const MAX_R = OFFSET * 2;

const tile = Array(MAX_R).fill("");
let current = Math.floor(MAX_R / 2) + 1;
for (const command of commands) {
    const [distance, direction] = command.split(" ");

    let start, end;
    for (let i = 0; i < Number(distance); i++) {
        if (direction === "L") {
            start = current - Number(distance) + 1;
            end = current;
            tile[start + i] = "white";
        } else {
            start = current;
            end = current + Number(distance) - 1;
            tile[start + i] = "black";
        }
    }
    current = direction === "L" ? start : end;
}

const whiteTile = tile.filter((el) => el === "white").length;
const blackTile = tile.filter((el) => el === "black").length;

console.log(whiteTile, blackTile)