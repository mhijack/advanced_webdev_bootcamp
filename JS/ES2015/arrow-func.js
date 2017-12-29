// arrow functions do not get their own:
// 'this' & 'arguments'
// ** never use arrow function with methods of an object since 'this' always refer to the window object**

const add = function(a, b) {
  return a + b;
};

// rewrite
// if arrow func are written on one line, don't use 'return'
const add2 = (a, b) => a + b;
[1, 2, 3].map(n => n * 2); // [2, 4, 6]

function doubleAndFilter(arr) {
  return arr
    .map(function(value) {
      return value * 2;
    })
    .filter(function(value) {
      return value % 3 === 0;
    });
}

doubleAndFilter([5, 10, 15, 20]); // [30]

const doubleAndFilter2 = arr => {
  return arr
    .map(value => {
      return value * 2;
    })
    .filter(value => {
      return value % 3 === 0;
    });
};

doubleAndFilter2([5, 10, 15, 20]); // [30]

const doubleAndFilter3 = arr =>
  arr.map(value => value * 2).filter(value => value % 3 === 0);

doubleAndFilter3([5, 10, 15, 20]); // [30]

// ====== when NOT to use ======
// arrow funcs do not get their own 'this' keyword
// 'this' would be the same as whatever the immediate outside environment's 'this'
const instructor = {
  firstName: 'jack',
  sayHi: function() {
    setTimeout(function() {
      console.log(`Hello ${this.firstName}`);
    }, 1000);
  }
};
instructor.sayHi(); // 'Hello undefined'

// to fix: use explicit binding
const instructor2 = {
  firstName: 'jack',
  sayHi: function() {
    setTimeout(
      function() {
        console.log(`Hello ${this.firstName}`); // this = window
      }.bind(this),
      1000
    ); // this = instructor2
  }
};
instructor2.sayHi(); // 'Hello jack'

// with arrow function
const instructor3 = {
  firstName: 'jack',

  // if use arrow func here, the sayHi method won't get its own this; rather, 'this' refers to the window object
  sayHi: function() {
    setTimeout(() => {
      console.log(`Hello ${this.firstName}`); // this = enclosing context, which is instructor3
    }, 1000);
  }
};
instructor3.sayHi(); // 'Hello jack'
