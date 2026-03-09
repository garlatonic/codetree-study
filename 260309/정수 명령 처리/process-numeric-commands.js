const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
class Stack {
    constructor() {
        this.item = [];
    }

    push(a) {
        this.item.push(a);
    }

    pop() {
        if (this.empty()) throw new Error("Stack is empty");
        return this.item.pop();
    }

    size() {
        return this.item.length;
    }

    empty() {
        return this.item.length === 0 ? 1 : 0;
    }

    top() {
        if (this.empty()) throw new Error("Stack is empty");
        return this.item[this.item.length - 1];
    }
}

const stack = new Stack();
for (const command of commands) {
    const c = command.split(" ");

    if (c[0] === "push") stack.push(c[1]);
    else if (c[0] === "size") console.log(stack.size());
    else if (c[0] === "empty") console.log(stack.empty());
    else if (c[0] === "top") console.log(stack.top());
    else if (c[0] === "pop") console.log(stack.pop());
}