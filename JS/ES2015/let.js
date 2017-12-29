/*

scope in javascript:

if for while do try catch

- let hoists, but it is in a TDZ so we can not access it

*/

function hello() {
  return jack;
  let jack = 'jack';
}
hello(); // ReferenceError: jack is not defined - no hoisting

function hello2() {
  return jack;
  var jack = 'jack';
}
hello2(); // undefined - hoisted

// each setTimeout gets its own block i
for (let i = 0; i < 5; i += 1) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 0, 1, 2, 3, 4

// at the time setTimeout runs, for-loop has already finished
for (var j = 0; j < 5; j += 1) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}
// 5, 5, 5, 5, 5

// wrapping setTimeout in a function will also give each setTimeout own scope
for (var k = 0; k < 5; k += 1) {
  (function(count) {
    setTimeout(() => {
      console.log(count);
    }, 1000)
  })(k);
}
