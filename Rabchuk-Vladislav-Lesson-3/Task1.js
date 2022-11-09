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

  return result;
};
