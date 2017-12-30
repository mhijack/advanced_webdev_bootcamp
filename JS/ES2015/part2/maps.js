/*

======= Maps ========
1. keys can be of any data type (object keys can only be string)
2. created with new Map;
3. can be iterated over

operations:
map.set(key, value); // returns map
map.delete(key); // returns true
map.size; // returns # of keys
map.get(1); // 'jack'

map.forEach(v => console.log(v));

for (val of map) {
  // gives: [key, value]
}

    const keys = map.keys(); // returns map of keys;
    keys.next(); // will return key in insertion order

    const vlaues = map.values(); // returns map of values;
    values.next(); // returns value in insertion order

    if anything in the iterator, keys.next().done === false;
    if iteration is over, keys.next().done === true;

When to use?
1. need to look up keys dynamically (not hard coded strings);
2. if need keys that are not strings;
3. frequently adding and removing key/value pairs;
4. operating on multiple keys at a time;

======= WeakMaps ========
1. like maps, but all the keys are objects
2. cannot be iterated over

*/

const map = new Map();
map.set(1, { name: 'jack' });
map.set(true, 'yep');
map.set('nice', [1, 2, 3]);
map.set([], [1, 2, 3]);
map.set({}, { hello: 'hi' });
map.delete(1); // true
map.size; // 2
