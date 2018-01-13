/*

Object Rest

*/

const student = { first: 'Jack', last: 'Chen', job: 'student' };
const { first: firstName, last: lastName, ...data } = student;
firstName; // 'Jack'
lastName; // 'Chen'
data; // job: 'student'

/*

Object Spread

*/

const dogs = { corgi: 'Jack', shiba: 'Summer', husky: 'Rui' };
const dog = { ...dogs, corgi: 'Chen'}
dog.corgi; // 'Chen' - overwritten
dog.husky; // 'Rui' - not overwritten

// similar to Object.assign({}, obj1, obj2), used to copy objects with default values
const defaults = { job: 'student', ownCat: true, ownDog: true }
const jack = { ...defaults, ownCat: false }
const summer = { ...defaults, ownDog: false }