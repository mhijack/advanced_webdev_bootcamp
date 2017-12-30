// ===== Object Shorthand Notation =======
const firstName = 'Jack';
const lastName = 'Chen';

// ES5
const student = {
  firstName: firstName,
  lastName: lastName
};
// is equivalent to ES2016:
const student2 = {
  firstName,
  lastName
};
// if key and value have the same name, use short-hand notation

// ====== Object Methods =======
// ES5
const cat = {
  meow: function() {
    return 'meow';
  }
};

// ES2015
const cat2 = {
  meow() {
    return 'meow';
  }
};

// ====== Computed Property Names =======
//ES5
const first = 'jack';
const stud = {};
stud[first] = 'That\'s me';

stud.jack; // 'That\'s me'

// ES2015
const stud2 = {
  [first]: 'That\'s me'
}

stud2.jack; // 'That\'s me'
