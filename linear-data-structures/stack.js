// Stacks are a last in first out service
class Stack {
  constructor() {
    this.stack = [];
  }

  push(stuff) {
    this.stack.push(stuff);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  length() {
    return this.stack.length;
  }
}