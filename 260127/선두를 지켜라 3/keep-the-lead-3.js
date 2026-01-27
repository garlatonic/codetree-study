const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
    const [v, t] = input[index++].split(' ').map(Number);
    A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
    const [v, t] = input[index++].split(' ').map(Number);
    B_moves.push([v, t]);
}

// Please Write your code here.
const A_track = [];
const B_track = [];

let A_time = 0, B_time = 0;

// A, B 트랙
for (const A_move of A_moves) {
    const [v, t] = A_move;

    for (let i = 0; i < t; i++) {
        const A_prev = A_track[A_track.length - 1] ?? 0;
        A_track.push(A_prev + v);
    }

    A_time += t;
}
for (const B_move of B_moves) {
    const [v, t] = B_move;

    for (let i = 0; i < t; i++) {
        const B_prev = B_track[B_track.length - 1] ?? 0;
        B_track.push(B_prev + v);
    }

    B_time += t;
}

const maxTime = Math.max(A_time, B_time);

let prevLeader = "None";
let count = 0;

for (let t = 0; t < maxTime; t++) {
    const A = A_track[t] ?? A_track[A_track.length - 1];
    const B = B_track[t] ?? B_track[B_track.length - 1];

    let currentLeader = "Tie";
    if (A > B) currentLeader = "A";
    else if (B > A) currentLeader = "B";

    if(currentLeader !== prevLeader) {
        count++;
        prevLeader = currentLeader;
    }
}

console.log(count)