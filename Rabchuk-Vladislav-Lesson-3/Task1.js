Array.prototype.filterArray = function (cb) {
  const result = [];
  for (const i of this.keys()) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
