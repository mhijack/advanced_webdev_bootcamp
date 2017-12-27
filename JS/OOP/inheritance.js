// ====== Prototypal Inheritance =======

// Object.create(object_prototype)
// creates a brand new object, and sets the prototype object of that new object to first parameter
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Student(firstName, lastName) {
  Person.apply(this, arguments);
}

// 1. create prototype object
// because a brand new object is created, changing student prototype does not affect person prototype
Student.prototype = Object.create(Person.prototype);
// 2. reseting constructor
Student.prototype.constructor = Student; // without it, constructor will be Person

Student.prototype.status = function() {
  return 'I am a student.';
};

const person = new Person('jack', 'chen');
const student = new Student('jianyuan', 'chan');

console.log(student.status()); // 'I am a student.'
console.log(person.status); // undefined
