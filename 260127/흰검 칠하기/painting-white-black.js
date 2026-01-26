const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const OFFSET = n;
const MAX_R = n * 2 * 100 + 1;

const tile = Array(MAX_R).fill("");
const checked = Array(MAX_R)
    .fill("")
    .map(() => {
        return { white: 0, black: 0 };
    });

let current = OFFSET + 1;
for (const command of commands) {
    const [distance, direction] = command;

    if (direction === "L") {
        for (let i = current; i > current - Number(distance); i--) {
            if (tile[i] === "grey") continue;
            checked[i].white++;

            if (checked[i].white >= 2 && checked[i].black >= 2) {
                tile[i] = "grey";
            } else {
                tile[i] = "white";
            }
        }

        current = current - Number(distance) + 1
    } else {
        for (let i = current; i < current + Number(distance); i++) {
            if (tile[i] === "grey") continue;
            checked[i].black++;
            
            if (checked[i].white >= 2 && checked[i].black >= 2) {
                tile[i] = "grey";
            } else {
                tile[i] = "black";
            }
        }
        current = current + Number(distance) - 1
    }
}

const white = tile.filter((el) => el === "white");
const black = tile.filter((el) => el === "black");
const grey = tile.filter((el) => el === "grey");
console.log(white.length, black.length, grey.length)