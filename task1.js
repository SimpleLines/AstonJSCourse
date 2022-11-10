Array.prototype.filterArray = function (cb, thisArg) {
  let context = this;
  let object = Object(context);
  let result = [];

  if (arguments.length > 1)
    context = thisArg;
  if (context == null)
    throw TypeError('Cannot read properties of null');
  if (typeof cb !== 'function')
    throw TypeError(`${cb} is not a function`);
  
  for (let i = 0; i < object.length; i++) {
    if (i in object) {
      if (cb.call(context, context[i], i, object)) {
        result.push(context[i]);
      }
    }
  }
  return result;
}
    