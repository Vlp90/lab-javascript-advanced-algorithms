class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  display() {
    // ... your code goes here

  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false;
  }

  push(item) {
    // this.stackControl.push(item);
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(item)
    } else {
      return "Stack Overflow"
    }
    return this.stackControl
  }

  pop() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return 'Stack Underflow';
    } else {
      let removedItem = this.stackControl.pop();
      return removedItem;
    }
  }
}

const checkClass = new StackDataStructure();

console.log(`Le stack contient ${checkClass.stackControl.length} element(s)`);
console.log(`La taille max du stack est de ${checkClass.MAX_SIZE} elements`);

// console.log(Object.StackDataStructure)