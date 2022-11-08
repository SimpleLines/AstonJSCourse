function deepCloneObject(obj) {
  return { ...obj };
}

function getInterval(arr, from, to) {
  let isArrOfNumbers = arr.every((element) => {
    return typeof element === 'number' && !isNaN(element);
  });

  if (!isArrOfNumbers) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.'
    );
  }

  if (typeof from !== 'number' || isNaN(from)) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен должен быть числом.');
  }

  if (typeof to !== 'number' || isNaN(to)) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.');
  }

  if (from > to) {
    return arr.filter((element) => {
      return element < from && element > to;
    });
  }
  return arr.filter((element) => {
    return element > from && element < to;
  });
}

function getFibonacci() {
  const iterator = {
    firstNumber: 0,
    fib: 1,

    [Symbol.iterator]() {
      return this;
    },

    next() {
      let acc = this.firstNumber;
      this.firstNumber = this.fib;
      this.fib = this.firstNumber + acc;

      if (acc <= 1) {
        return { done: false, value: acc };
      }
      return { done: false, value: acc };
    },
  };
  return iterator;
}

function getUniqArray(arr) {
  if (
    arr.every((element) => {
      return typeof element === 'number' && !isNaN(element);
    })
  ) {
    return [...new Set(arr)];
  } else {
    throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел.');
  }
}
