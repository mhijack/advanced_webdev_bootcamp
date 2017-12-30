/*

======== sets =======

1. all values in a set are unique
2. any type of value can exist in a set
3. created using the 'newæ keyword


When to use?
1. ignore duplicates;
2. don't need to identify values with keys;
3. don't care about order of values;

operations:
const set = new Set([]);
set.add(10);
set.size;
set.has(10); // determine whether has a value
set.delete(10);

for (value of set) {}

======== WeakSet =======
1. all values have to be objects
2. cannot be iterated over

*/

const set = new Set;

// can also be created from an array
const set2 = new Set([1, 2, 3]); // { 1, 2, 3 }

set.add(10); // { 10 }
set.add(20); // { 20, 10 }
set.add(10); // { 20, 10 }

s.size; // 2

set.has(10); // true
set.delete(10); // { 20 }