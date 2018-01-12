/*

Array.prototype.find(value, index, array)
Array.prototype.findIndex()

1. Invoked on arrays
2. Accepts a callback with value, index and array (like forEach, map, filter, etc.)
3. Returns the FIRST value found or undefined if not found.

*/

const students = [
  { name: 'Jack' },
  { name: 'Summer' },
  { name: 'Rui' },
  { name: 'Weelow' },
  { name: 'Jack' }
];

students.find(student => (student.name = 'Jack')); // returns the object
students.findIndex(student => (student.name = 'Jack')); // returns index

/*

String.prototype.includes()
Array.prototype.includes()

1. returns a boolean if a value is in a 'string' - easier than using 'indexOf'

*/

'awesome'.includes('i'); // false
'awesome'.includes('a'); // true

/*

static method: (method on the constructor function)

Number.ifFinite()
Number.isIntegeter()

1. anything not a number will return false
  NaN is not finite

*/

if (typeof val === 'number' && !isNaN(val))

to

Number.isFinite(val)