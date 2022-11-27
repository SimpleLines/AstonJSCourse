Array.prototype.filterArray = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  
  let context = thisArg ?? this;

  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) {
      continue;
    }

    let current = callback.call(context, this[i], i, this);

    if (current) {
      res.push(this[i]);
    }
  }

  return res;
};

