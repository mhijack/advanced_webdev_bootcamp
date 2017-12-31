/*
new Promise()

resolve()
reject()
both returns a promise object, making .then() and .catch() chainable;

const p = new Promise((resolve, reject) => {
  if (succeed) {
    resolve();
  } else {
    reject();
  }
})

*/

function display() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.random();

      if (num > 0.5) {
        resolve('num is ' + num + ' greater than 0.5');
      } else {
        reject('num is ' + num + ' less than 0.5');
      }
    }, 1000);
  });
}

display()
  .then(succeed => {
    console.log(succeed);
  })
  .catch(err => {
    console.log(err);
  });

// ======== multiple promises =======
// Promise.all()
// accepts an array of promises and resolves all of them, or reject once a single one of the promises has been first rejected (fail fast);
// if lal promises are resolved, return an array containing all returned values, in the same order as the promises passed in
// NOTE: not guaranteed that promises are resolved sequentially, but promise.all waits for them
function getMovie(title) {
  return $.getJSON('url');
}

const titanic = getMovie('titanic');
const shrek = getMovie('shrek');

Promise.all([titanic, shrek])
  .then(movies => {
    return movies.forEach(value => {
      console.log(value.Year);
    });
  })
  .catch();
