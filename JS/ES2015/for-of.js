// for...of - iterates over:
// 1. enumerable properties
// 2. prototype properties
// 3. can only be used on data structures with a 'Symbol.iterator' method implemented (no objects)
const arr = [3, 4, 5, 6, 7];

for(let val of arr) {
  console.log(val);
}
// 3, 4, 5, 6, 7

for (let val in arr) {
  console.log(val);
}
// 0, 1, 2, 3, 4
