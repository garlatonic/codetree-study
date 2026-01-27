const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.
const raceA = [];
const raceB = [];
let raceTimeA = 0,
    raceTimeB = 0;

function distanceArr(dataArr, race, raceTime) {
    for (const data of dataArr) {
        const [v, t] = data;
        for (let i = 1; i <= t; i++) {
            raceTime++;
            const prevDistance = race[raceTime - 1] ?? 0;
            race[raceTime] = prevDistance + v;
        }
    }
    return raceTime;
}

raceTimeA = distanceArr(aData, raceA, raceTimeA);
raceTimeB = distanceArr(bData, raceB, raceTimeB);

const maxRaceTime = Math.max(raceTimeA, raceTimeB);

let count = 0,
    prevLeader = null;
for (let i = 1; i <= maxRaceTime; i++) {
    const aDistance = raceA[i] ?? raceA[raceTimeA];
    const bDistance = raceB[i] ?? raceB[raceTimeB];

    if (prevLeader === "A") {
        if (aDistance < bDistance) {
            prevLeader = "B";
            count++;
        }
    } else if (prevLeader === "B") {
        if (aDistance > bDistance) {
            prevLeader = "A";
            count++;
        }
    } else {
        if (aDistance > bDistance) {
            prevLeader = "A";
        } else if (aDistance < bDistance) {
            prevLeader = "B";
        }
    }
}

console.log(count);
