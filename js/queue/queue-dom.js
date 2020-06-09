const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  queueUL.innerHTML = `<p> ${queue.queueControl.length} element(s) in the queue...</p>`;
  queue.queueControl.forEach((item) => {
    const newQueueItem = document.createElement("li");
    newQueueItem.className = "active";
    newQueueItem.innerHTML = item;
    queueUL.appendChild(newQueueItem);
  });
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    warningTopQueue.innerHTML = "Queue Underflow !";
    warningTopQueue.style.display = "block";
    warningTopQueue.style.textAlign = "center";
  } else if (type === "overflow") {
    warningTopQueue.innerHTML = "Queue OverFlow !";
    warningTopQueue.style.display = "block";
    warningTopQueue.style.textAlign = "center";
  }
};

const addToQueue = () => {
  warningTopQueue.style.display = "none";
  if (queue.canEnqueue()) {
    queue.enqueue(queueInput.value);
    generateListQueue();
    clearQueueInput();
  } else {
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => {
  // ... your code goes here
  if (queue.isEmpty()) {
    generateWarningQueue("underflow");
  } else {
    queue.dequeue();
    generateListQueue();
    clearQueueInput();
  }
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
