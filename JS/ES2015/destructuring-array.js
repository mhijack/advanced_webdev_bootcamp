// ====== Array Destructuring ======
const arr = [1, 2, 3];

const [a, b, c] = arr;
a; // 1
b; // 2
c; // 3

// another example
function returnNumbers(a, b) {
  return [a, b];
}

const [first, second] = returnNumbers(5, 10);

first; // 5
second; // 10

// comes in handy when: swapping values without creating a new array
const arr2 = [1, 2]
let [x, y] = arr2
x; // 1
y; // 2
[x, y] = [y, x]
x; // 2
y; // 1