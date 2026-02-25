const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const s = input[1];
const commands = input.slice(2, 2 + m);
// Please Write your code here.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DDL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    pushFront(newData) {
        if (this.head === null) {
            const newNode = new Node(newData);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(newData);
            newNode.next = this.head;

            this.head.prev = newNode;
            this.head = newNode;
            newNode.prev = null;
        }
    }
    pushBack(newData) {
        if (this.tail === null) {
            const newNode = new Node(newData);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(newData);
            newNode.prev = this.tail;

            this.tail.next = newNode;
            this.tail = newNode;
            newNode.next = null;
        }
    }
    delete(node) {
        const nextNode = node.next;

        if (node === this.begin()) {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = null;
            node.next = null;
        }

        return nextNode;
    }
    insert(node, newData) {
        if (node === this.end()) {
            this.pushBack(newData);
        } else if (node === this.begin()) {
            this.pushFront(newData);
        } else {
            const newNode = new Node(newData);
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev.next = newNode;
            node.prev = newNode;
        }
    }
    begin() {
        return this.head;
    }
    end() {
        return this.tail;
    }
}

const l = new DDL();
for (let i = 0; i < s.length; i++) {
    l.pushBack(s[i]);
}

let it = l.end();

commands.forEach((command) => {
    const c = command.split(" ");
    if (c[0] === "L") {
        if (l.begin() !== it) it = it.prev;
    } else if (c[0] === "R") {
        if (l.end() !== it) it = it.next;
    } else if (c[0] === "D") {
        if (l.end() !== it) {
            l.delete(it);
        }
    } else if (c[0] === "P") {
        l.insert(it.next, c[1]);
        it = it.next;
    }
})

const result = [];
let fr = l.begin();
while (fr !== null) {
    result.push(fr.data);
    fr = fr.next;
}

console.log(result.join(""))