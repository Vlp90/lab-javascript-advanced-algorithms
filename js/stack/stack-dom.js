const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = '';
};

const renderListStack = () => {
  // ... your code goes here
  stackList.innerHTML = `<li> ${newStack.stackControl.length} element(s) in the stack...</li>`;
  newStack.stackControl.forEach((item)=>{
    const newStackItem = document.createElement('li');
    newStackItem.className = "inactive";
    newStackItem.innerHTML = item;
    stackList.appendChild(newStackItem)
  })

};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningTopStack.innerHTML = 'Stack UnderFlow !'
    warningTopStack.style.display = 'block'
    warningTopStack.style.textAlign = 'center'
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopStack.innerHTML = 'Stack Overflow !'
    warningTopStack.style.display = 'block'
    warningTopStack.style.textAlign = 'center'
  }
};

const addToStack = () => {
  // ... your code goes here
  warningBottomStack.style.display = 'none'
  if(newStack.canPush()) {
    newStack.push(stackInput.value);
    renderListStack()
    clearStackInput()
    console.log("can push")
  } else {
    generateWarningStack('overflow')
    console.log("can't push")
  }
  
};

const removeFromStack = () => {
  // ... your code goes here

  if(newStack.isEmpty()) {
    generateWarningStack('underflow')
    console.log("its empty")
  } else {
    newStack.pop()
    renderListStack()
    clearStackInput()
  }
  console.log("removed from stack")
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

console.log(stackInput)
console.log(stackList)
console.log(newStack.stackControl)
console.log(warningBottomStack)
console.log(container)