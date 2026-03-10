const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.
const MAX_SIZE = 10000;
class Queue {
    constructor() {
        this.q = [];
        this.head = 0;
        this.tail = 0;
    }
    push(a) {
        this.tail = (this.tail + 1) % MAX_SIZE;
        this.q[this.tail] = a;
    }
    empty() {
        return this.head === this.tail;
    }
    size() {
        return (this.tail - this.head + MAX_SIZE) % MAX_SIZE
    }
    pop() {
        if (this.empty()) throw new Error("Queue is empty");
        this.head = (this.head + 1) % MAX_SIZE
        return this.q[this.head];
    }
    front() {
        if (this.empty()) throw new Error("Queue is empty");
        return this.q[(this.head + 1) % MAX_SIZE];
    }
}

const queue = new Queue();

for (const command of commands) {
    const c = command.split(" ");

    if (c[0] === "push") {
        queue.push(c[1]);
    } else if (c[0] === "front") {
        console.log(queue.front());
    } else if (c[0] === "empty") {
        console.log(queue.empty() ? 1 : 0);
    } else if (c[0] === "pop") {
        console.log(queue.pop());
    } else if (c[0] === "size") {
        console.log(queue.size());
    }
}