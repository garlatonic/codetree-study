const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const dynamic = [];

function pushBack(a) {
    dynamic.push(a);
}
function popBack(a) {
    dynamic.pop(a)
}
function size() {
    console.log(dynamic.length);
}
function get(k) {
    console.log(dynamic[k - 1]);
}

for (const command of commands) {
    const c = command.split(" ");
    if (c[0] === "push_back") {
        pushBack(c[1]);
    } else if (c[0] === "pop_back") {
        popBack();
    } else if (c[0] === "size") {
        size();
    } else {
        get(c[1]);
    }
}