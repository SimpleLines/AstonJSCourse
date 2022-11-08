const getInterval = (arr, from, to) => {
  arr.map((item) => {
    if (!(typeof item === 'number')) {
      throw Error(
        'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
      );
    }
  });

  if (!(typeof from === 'number')) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }

  if (!(typeof to === 'number')) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }

  const range = [];
  const newArr = [];

  if (from > to) {
    for (let i = to; i <= from; i++) {
      range.push(i);
    }
  } else {
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
  }

  arr.map((item) => {
    if (range.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};
