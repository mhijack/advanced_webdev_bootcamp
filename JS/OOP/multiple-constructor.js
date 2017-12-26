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

// =========== exercise =========
// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person.
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;

  this.multipleFavoriteNumber = function(number) {
    return this.favoriteNumber * number;
  }
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.


// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
  // call (borrow the code inside Parent) Parent constructor with 'this' set to Child.
  Parent.apply(this, arguments);
}
