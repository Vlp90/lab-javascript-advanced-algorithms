class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length === 0 ? true : false;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.unshift(item);
    } else {
      return "Queue Overflow";
    }
    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here

    if (this.queueControl.length > 0) {
      let shiftedItem = this.queueControl.shift();
      return shiftedItem;
    } else {
      return "Queue Underflow";
    }
  }
}
