/*

** Generator **

1. A special kind of function which can pause execution and resume at any time;
2. created using a * after function keyword;
3. when invoked, a generator object is returned to us with the keys of value and done:
  - (the generator object returned contains a method called .next(), which returns another generator object);
  - 'value' is what is returned from the paused function using the 'yield' keyword;
  - 'Done' is a boolean which returns true when the function has completed running;

*/

function* pause(num) {
  for (let i = 0; i < num; i += 1) {
    yield i;
  }
}

const gen = pause(5);

gen.next(); // { value: 0, done: false } -> generator object
gen.next(); // ...
gen.next(); // { value: undefined, done: true }
// can store them in a variable and have permanent access to a particular paused step

// can also loop through yield items
// for (...of)

// Async Generators
movieGetter.next().value.then(val => console.log(val));