// ===============================================
// 1. when 3 dots used inside function parameters
// ...rest can only be used as the final parameters; not parameter allowed on its right
// ...rest always return an array
function print(a, b, ...c) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
}
print(1, 2, 3, 4, 5); // a:1 b:2 c: 345

// 'arguments' keyword on the other hand only supports .length() method
// ...rest returns an array, thus support all array methods
function total(...all) {
  return all.reduce((acc, next) => {
    return acc + next;
  }, 0);
}
total(1, 2, 3); // 6

// ===============================================
// 2. when 3 dots used outside function parameters
// ... spread
// used on arrays to spread each value out (as a comma separated value)
// useful when you have an array, but what you are working with expects comma separated values
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = arr1.concat(arr2).concat(arr3);

const combinedSpread = [...arr1, ...arr2, ...arr3];

Math.max(arr1); // NaN - max does not accept array
Math.max.apply(this, arr1); // ES5 method, works!
Math.max(...arr1); // 3

// another example
function sum(a, b, c) {
  return a + b + c;
}
const nums = [12, 15, 20];
sum.apply(this, nums); // 47
sum(...nums); // 47
