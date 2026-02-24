const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    pushFront(a) {
        const newNode = new Node(a);
        newNode.next = this.head;

        if (this.head !== null) {
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.prev = null;
        this.nodeNum += 1;
    }

    pushBack(a) {
        const newNode = new Node(a);
        newNode.prev = this.tail;

        if (this.tail !== null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = null;
        this.nodeNum += 1;
    }

    popFront() {
        if (this.head === null) {
            console.log("비어있는 리스트")
        } else if (this.head.next === null) {
            const temp = this.head;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.head;

            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
            this.nodeNum -= 1;

            return temp.data;
        }
    }

    popBack() {
        if (this.tail === null) {
            console.log("비어있는 리스트")
        } else if (this.tail.prev === null) {
            const temp = this.tail;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.tail;

            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;
            this.nodeNum -= 1;

            return temp.data;
        }
    }

    size() {
        return this.nodeNum;
    }

    empty() {
        return this.nodeNum === 0 ? 1 : 0;
    }

    front() {
        if (this.head === null) {
            console.log("비어있는 리스트")
        } else {
            return this.head.data;
        }
    }

    back() {
        if (this.tail === null) {
            console.log("비어있는 리스트")
        } else {
            return this.tail.data
        }
    }
}

const list = new DoubleLinkedList();
commands.forEach((command) => {
    const c = command.split(" ");

    if(c[0] === "push_back") {
        list.pushBack(c[1]);
    } else if(c[0] === "push_front") {
        list.pushFront(c[1]);
    } else if(c[0] === "pop_front") {
        const pop = list.popFront();
        console.log(pop);
    } else if(c[0] === "pop_back") {
        const pop = list.popBack();
        console.log(pop);
    } else if(c[0] === "front") {
        const front = list.front();
        console.log(front);
    } else if(c[0] === "back") {
        const back = list.back();
        console.log(back);
    } else if(c[0] === "size") {
        const size = list.size();
        console.log(size);
    } else if(c[0] === "empty") {
        const empty = list.empty();
        console.log(empty)
    }
})