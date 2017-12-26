// constructor function
function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

const house1 = new House(2, 2, 1000);

// keyword 'new': sets 'this' to the newly created empty object
// 1. creates an empty object
// 2. sets the keyword 'this' to be that empty object
// 3. adds implicit 'return this' to the end of the function
// 4. adds a property onto the empty object called "__proto__", which sets the prototype of empty object to House.prototype

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} just barked!`);
};

const rusty = new Dog('Rusty', 3);
const fido = new Dog('Fido', 1);

rusty.bark(); // 'Rusty just barked!'
