function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  // at the creation of empty object when new Motorcycle() is called, this === empty object
  // Car.call(this, make, model, year);
  Car.apply(this, arguments);
  this.numWheels = 2;
}

const halei = new Motorcycle('halei', 'halei2', 10994);
