class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size() + 1] = value;
  }

  pop() {
    var popped = this.storage[this.size()];
    delete this.storage[this.size()];
    return popped;

  }

  size() {
    return Object.keys(this.storage).length;
  }

}