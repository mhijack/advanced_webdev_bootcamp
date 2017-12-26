function Person(name) {
  this.name = name;
}

// prototype chain
Person.prototype.isMale = true;

const jack = new Person('Jack');

console.log(jack.__proto__ === Person.prototype); // true

console.log(Person.prototype.constructor === Person); // true
console.log(jack.constructor === Person); // true

console.log(jack.isMale); // true

// ===== challenge ======
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
};

Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return 'beep';
  }
};
