/*

String.prototype.padStart(length, filler);
String.prototype.padEnd(length, filler);

1. default filler is space
2. fill string to the target length
3. if given length is less than length of string, return original string

*/

'haha'.padStart(5, '!'); // '!haha'
'haha'.padStart(10); // '      haha'

// .padEnd() works in the same way