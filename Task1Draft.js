'use strict';
function callback(element, index, arr) {
  return element > 0;
}

Array.prototype.filterArray = function (cb) {
  const result = [];
  for (const i of this.keys()) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }

  // switch (arguments[0].length) {
  //   case 1:
  //     return Array.from(result);
  //   case 2:
  //     return Array.from(result, this[i]);
  //   case 3:
  //     return Array.from(result, this[i], this);
  // }

  return result;
};

const arr = [1, 2, -3, 4, 5, -6, -7, 6];
const arr2 = ['wow', 'yo', 'wow', 'wow', 'wow', 'yo'];
// const output = arr.filterArray((element, i, arr) => {
//   return element > 0;
// });
const output = arr.filterArray(callback);
console.log(output);

const filterNormal = arr.filter((el, i, arr) => el > 0);
console.log(filterNormal);

// switch (key) {
// }

// console.log(arr.filterArray.arguments);
