const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class Deque {
    constructor() {
        this.count = 0;
        this.head = null;
        this.next = null;
    }
    pushFront(item) {
        let newNode = new Node(item);

        if (this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        count++;
    }
    pushBack(item) {
        let newNode = new Node(item);

        if (this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
    }
    popFront() {
        if (this.count === 0) throw new Error("Deque is empty");

        let popNode = this.head;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = popNode.next;
            this.head.prev = null;
        }
        this.count--;
        return popNode.value;
    }
    popBack() {
        if (this.count === 0) throw new Error("Deque is empty");

        let popNode = this.tail;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNode.prev;
            this.tail.next = null;
        }
        this.count--;
        return popNode.value;
    }
    size() {
        return this.count;
    }
    front() {
        return this.head.value;
    }
}

const deque = new Deque();
// 1부터 n까지 일단 덱에 넣기
for (let i = 1; i <= n; i++) {
    deque.pushBack(i);
}

// 정수가 하나만 남을 때까지
while (deque.size() > 1) {
    // 맨앞의 정수를 제거하고
    deque.popFront();
    // 남은 수열의 맨 앞 정수를 맨 뒤로 이동
    deque.pushBack(deque.popFront())
}

console.log(deque.front())