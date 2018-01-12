/*

** to replace Math.pow(base, exponent)

**=

*/

// get sum of squares
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, next) => acc + next ** 2, 0);
sum; // 30