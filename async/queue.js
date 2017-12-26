// ====== queue and event loop ======
function square(n) {
  return n * n;
}

setTimeout(() => {
  console.log('Callback is placed on the queue');
}, 0);
// even though setTimeout is called before square, and 0 seconds may seem
// it's invoked immediately, it actually prints after square because queue

console.log(square(2));

// concept of stack and queue
// any async functions are hold on queue before stack is empty, then ran
// functions in queue are placed on stack after stack is empty
// event loop is responsible for removing funcs from queue and place them on the stack

setTimeout(() => {
  console.log('Hello from the timeout');
}, 0);

for (let i = 0; i < 100000000; i += 1) {
  let x = i * 2;
}

console.log('Done with loop');

// in this whole document, order of print:
// 1. square
// 2. 'Done with loop'
// 3. 'call back is placed on queue'
// 4. 'hello from the timeout'

// ======= single-threaded ========
// code that is running will not be interrupted by other code
