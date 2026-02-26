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
        this.BEGIN = new Node(-2);
        this.END = new Node(-1);
        this.BEGIN.next = this.END;
        this.END.prev = this.BEGIN;
        this.head = this.BEGIN;
        this.tail = this.END;
    }
    pushFront(newData) {
        const newNode = new Node(newData);
        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
        newNode.prev = null;
    }
    pushBack(newData) {
        if (this.begin() === this.end()) {
            this.pushFront(newData);
        } else {
            const newNode = new Node(newData);
            newNode.prev = this.tail.prev;
            this.tail.prev.next = newNode;
            newNode.next = this.tail;
            this.tail.prev = newNode;
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
        const newNode = new Node(newData);

        newNode.prev = node;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.next = newNode;

        return newNode;
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

let it = l.end().prev;

commands.forEach((command) => {
    const c = command.split(" ");
    if (c[0] === "L") {
        if (it !== l.begin()) it = it.prev;
    } else if (c[0] === "R") {
        if (it !== l.end() && it.next !== l.end()) it = it.next;
    } else if (c[0] === "D") {
        if (it.next !== l.end()) {
            l.delete(it.next);
        }
    } else if (c[0] === "P") {
        it = l.insert(it, c[1]);
    }
})

const result = [];

let fr = l.begin().next;
while (fr !== l.end()) {
    result.push(fr.data);
    fr = fr.next;
}

console.log(result.join(""))
