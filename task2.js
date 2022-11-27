const getInterval = (arr, from, to) => {
  if (!(typeof from === 'number')) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }
  if (!(typeof to === 'number')) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }
  arr.map((i) => {if (!(typeof i === 'number')) {
      throw Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения');
    }
  });
  let newArr = []
  if (from < to) {
    newArr = arr.filter((i) => (from < i) && (to > i));
  }
  else {
    newArr = arr.filter((i) => (from < i) && (to > i));
  }
  return newArr;
}
