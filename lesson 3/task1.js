Array.prototype.filterArray = function (cb, thisArg) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    let element = this[index];
    let check = cb.call(thisArg, element, index, this);
    if (check) {
      result.push(element);
    }
  }
  return result;
};
