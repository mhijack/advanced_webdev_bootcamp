class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  greet() {
    return `Hello ${first} ${last}`;
  }
}

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
class Student extends Person {
  constructor(first, last) {
    // super must be called first before using 'this'
    this.occupation = 'student'; // ReferenceError;

    // calls the parent class' constructor with first & last provided for the Person's first and last
    // must be of the same names!
    // Person.apply(this, arguments)
    super(first, last);
  }
}
