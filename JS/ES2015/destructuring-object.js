// ===== Object Destructuring =======
const student = {
  firstName: 'Jack',
  lastName: 'Chen'
};

// ES5
// const firstName = student.firstName;
// const lastName = student.lastName;

// ES2015
// if want same variable names as keys:
const { firstName, lastName } = student;
firstName; // 'Jack'
lastName; // 'Chen'

// if want different variable names:
const { firstName: first, lastName: last } = student;
first; // 'Jack'
last; // 'Chen'

// ===== more complex example =======
// ES5
function createStudent(options) {
  const options = options || {};
  const name = options.name || { first: 'Jack', last: 'Chen' };
  const isSmart = options.isSmart || true;

  return [name.first, name.last, isSmart];
}

// ES2015
// takes an object as argument;
// equal sign indicates default value
function createStudent({
  // if name is undefined, use default;
  name = { first: 'Jack', last: 'Chen' },

  // if isSmart is undefined, use true;
  isSmart = true
}) {
  return [name.first, name.last, isSmart];
}

// destructuring continued
function display({name, favColor}) {
  return [name, favColor];
}

const chen = {
  name: 'Chen',
  favColor: 'Green'
}
display(chen); // ['Chen', 'Green']
