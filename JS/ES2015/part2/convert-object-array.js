/*

Copying object contents with 'Object.assign'

** not a deep clone **

*/

const o = {
  name: 'Jack'
}

const o2 = Object.assign({}, o);

o2.name = 'Summer';
o.name; // 'Jack'

/*

Convert array-like-objects into array with 'Array.from'

(if possible)

*/

const divs = document.getElementsByTagName('div');
const converted = Array.from(divs);

const firstSet = new Set([1, 2, 3, 4, 5, 4, 3, 2, 1]);
const arrayFromSet = Array.from(firstSet);
firstSet; // duplicates eliminated