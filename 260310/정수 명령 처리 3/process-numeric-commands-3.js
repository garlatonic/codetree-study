const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.
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
    this.tail = null;
  }
  pushFront(a) {
    let x = new Node(a);

    if (this.count === 0) {
      this.head = x;
      this.tail = x;
    } else {
      this.head.prev = x;
      x.next = this.head;
      this.head = x;
    }
    this.count++;
  }
  pushBack(a) {
    let x = new Node(a);

    if (this.count === 0) {
      this.head = x;
      this.tail = x;
    } else {
      this.tail.next = x;
      x.prev = this.tail;
      this.tail = x;
    }
    this.count++;
  }
  empty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  popFront() {
    if (this.empty()) throw new Error("Deque is empty");

    let x = this.head;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = x.next;
      this.head.prev = null;
    }
    this.count--;
    return x.value;
  }
  popBack() {
    if (this.empty()) throw new Error("Deque is empty");

    let x = this.tail;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = x.prev;
      this.tail.next = null;
    }
    this.count--;
    return x.value;
  }
  front() {
    if (this.empty()) throw new Error("Deque is empty");
    return this.head.value;
  }
  back() {
    if (this.empty()) throw new Error("Deque is empty");
    return this.tail.value;
  }
}

const deque = new Deque();
for (const command of commands) {
  const c = command.split(" ");

  if (c[0] === "push_front") {
    deque.pushFront(c[1]);
  } else if (c[0] === "push_back") {
    deque.pushBack(c[1]);
  } else if (c[0] === "pop_front") {
    console.log(deque.popFront());
  } else if (c[0] === "pop_back") {
    console.log(deque.popBack());
  } else if (c[0] === "size") {
    console.log(deque.size());
  } else if (c[0] === "empty") {
    console.log(deque.empty() ? 1 : 0);
  } else if (c[0] === "front") {
    console.log(deque.front());
  } else if (c[0] === "back") {
    console.log(deque.back());
  }
}