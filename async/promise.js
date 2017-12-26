// ======= promise ========
// a promise is an object that represents a task that will be completed in the future

const p1 = new Promise((resolve, reject) => {
  // if asynchronous task is completed successfully, resolve is invoked; -> connects to .then()
  // resolve([1, 2, 3, 4]);

  // if unsuccessful, reject is invoked; -> connects to .catch()
  reject('ERROR');
});

p1
  .then(arr => {
    console.log('Promise p1 resolved with data:', arr);
  })
  // if rejected, none of the then will be invoked; instead, catch is incoked
  .catch(data => {
    console.log('Promise p1 was rejected with data:', data);
  });

// =================================================
// 50% chance of resolving & rejecting the promise
const p2 = new Promise((resolve, reject) => {
  const num = Math.random();

  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p2
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// =================================================
const promise = new Promise((resolve, reject) => {
  // the promise object will be created before setTimeout() finishes running
  // all of the functions are off the stsack before setTimeout is invoked
  // setTimeout is put on queue
  setTimeout(() => {
    const randomInt = Math.floor(Math.random() * 10);
    if (randomInt > 5) {
      resolve(randomInt);
    } else {
      reject(randomInt);
    }
  }, 2000);
});

promise
  .then(result => {
    console.log('Random int passed to resolve:', result);
  })
  .catch(data => {
    console.log('Random int passed to reject:', data);
  });

// =================================================
// callback-hell example
let counter = 0;
setTimeout(() => {
  counter += 1;
  console.log('Counter:', counter); // 2 seconds later: 'Counter: 1

  setTimeout(() => {
    counter += 1;
    console.log('Counter:', counter); // 4 seconds later: 'Counter: 2

    setTimeout(() => {
      counter += 1;
      console.log('Counter:', counter); // 6 seconds later: 'Counter: 3
    }, 2000);
  }, 2000);
}, 2000);

// promise chaining example
const promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomInt1 = Math.floor(Math.random() * 10);
    resolve(randomInt1);
  }, 300);
});

// ========== returning promises =========
// if a promise return a promise object, the .then() will wait until the first promise to complete before executing
promiseChain
  .then(data => {
    console.log('Random Int 1 passed to resolve:', data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomInt2 = Math.floor(Math.random() * 10);
        resolve(randomInt2);
      }, 3000);
    });
  })
  .then(result => {
    console.log('Random Int 2 passed to resolve:', result);
  });

// ========== returning data =========
// the value returned from the previous .then(), will be passed to the next .then() as a parameter
const promiseData = new Promise((resolve, reject) => {
  resolve(5);
});

promiseData
  .then(data => {
    return data * 2;
  })
  .then(data => {
    return data + 10;
  })
  .then(data => {
    console.log(data);
  });
  // 20

// ========== refactoring callback-hell =========
// create promise object
// chain first .then() to promise object, setTimeout in there, decrement counter by 1
// repeat twice
let count = 0;

function incCount() {
  count += 1;
  console.log('Count:', count);
}

function runLater(callback, timeInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve(); // this is critical for promise chaining to be possible
    }, timeInMs);
  });
}

runLater(incCount, 1000) // runLater returns a promise
  .then(() => {
    return runLater(incCount, 2000); // returns a function that returns a promise
  })
  .then(() => {
    return runLater(incCount, 3000);
  })
  .then(() => {
    // final .then not necessary
  });


// often times in practice, you will often use promises that are returned to you
// meaning often I don't need to create the Promise myself
