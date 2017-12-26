// ====== forEach ======
Array.prototype.ownForEach = function(callback) {
  for (let i = 0, n = this.length; i < n; i += 1) {
    // forEach accepts 3 arguments: callback(currentEle, currentIndex, array)
    callback(this[i], i, this);
  }
};

const arr = [1, 2, 3];

arr.ownForEach(console.log);
arr.ownForEach((ele, index, array) => {
  console.log(`the item at ${index} is ${ele}, within Array ${array}`);
});

// ==== concatenate array of string =====
const strings = ['my', 'forEach', 'example'];
let result = '';
strings.ownForEach((ele, index, array) => {
  const n = array.length;
  n - 1 !== index ? (result += ele + ' ') : (result += ele + '!!!');
});
console.log(result);

// ===== forEach function =====
function forEach(arr, callback) {
  for (let i = 0, n = arr.length; i < n; i += 1) {
    callback(arr[i], i, arr);
  }
}

// ===================================================
// ====== indexOf =======
// same as indexOf
Array.prototype.ownIndexOf = function(target) {
  for (let i = 0, n = this.length; i < n; i += 1) {
    if (this[i] === target) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

console.log(arr.ownIndexOf(2));

// ===== findIndex ======
function findIndex(arr, callback) {
  for (let i = 0, n = arr.length; i < n; i += 1) {
    if (callback(arr[i], i, arr)) {
      return i; // must return a value if wish to use returned value as result of callback
    }
  }
  return -1;
}

const findIndexArr = [5, 11, 13, 8, 6, 7];

function isEven(ele) {
  return ele % 2 === 0;
}

function is5(ele) {
  return ele === 5;
}

function is100(ele) {
  return ele === 100;
}

// find first even number
console.log(findIndex(findIndexArr, isEven)); // 3
console.log(findIndex(findIndexArr, is5)); // 0
console.log(findIndex(findIndexArr, is100)); // -1
