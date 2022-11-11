function filterArray(cb, thisArg) {
  if (this == null) {
    throw new Error('null can`t be filtered');
  }

  const resultArray = [];
  let context = this;
  let obj = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  for (let i = 0; i < obj.length; i++) {
    if (i in obj) {
      if (cb.call(context, this[i], i, obj)) {
        resultArray.push(this[i]);
      }
    }
  }
  return resultArray;
}

Array.prototype.filterArray = filterArray;
