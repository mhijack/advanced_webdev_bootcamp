/*

======= 'class' keyword =======

1. creates a const -> cannot be redeclared;
2. an abstraction of constructor functions and prototypes. JavaScript does not have built in support for OOP
3. does not hoise -> so declare class at top of file
4. still uses 'new' keyword to create objects

*/

// =========== ES5 ===========
function Student(first, last) {
  this.first = first;
  this.last = last;
}

// instance methods
Student.prototype.sayHello = function() {
  return `Hello ${this.first} ${this.last}`;
}

// class methods
Student.isStudent = function(obj) {
  return obj.constructor === Student;
}

const jack = new Student('jack', 'chen');

// =========== ES2015 ===========
class Student2 {
  // constructor will be run when new is used with Student2
  constructor(first, last) {
    // code in constructor function is the same as in ES5
    this.first = first;
    this.last = last;
  }

  // 'instance methods' - inside class with Object Shorthand Notation
  // sum.sayHello()
  sayHello() {
    return `Hello ${this.first} ${this.last}`;
  }

  // 'static methods' - equivalent to class methods in ES5
  // Student.isStudent(sum)
  static isStudent(obj) {
    // similar to Array.isArray
    return obj.constructor === Student2;
  }
}
const sum = new Student2('summer', 'han');
// if use without new:
// Uncaught TypeError: Class constructor Student2 cannot be invoked without 'new'