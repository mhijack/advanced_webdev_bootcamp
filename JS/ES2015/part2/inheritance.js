// ======= Prototypal Inheritance =======
// ===== ES5 =======
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.greet = function() {
  return `Hello ${first} ${last}`;
};

// instance of Student inherits methods of Person
function Student(first, last) {
  Person.call(this, first, last);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const jack = new Student('jack', 'chen');

jack.greet; // gets the greet method from Person

// ======== ES2015 ========
class PersonClass {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  greet() {
    return `Hello ${first} ${last}`;
  }
}

// with 'extends'
class StudentClass extends PersonClass {
  constructor(first, last) {
    super(first, last);
  }
}

const chen = new StudentClass('jack', 'chen');

chen.constructor === StudentClass; // true
chen.constructor === PersonClass; // false

StudentClass.prototype.constructor === StudentClass; // true
StudentClass.greet; // exists
