function getInterval(arr, from, to) {
  if (!arr.every((val) => typeof val == 'number')) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.',
    );
  }
  if (typeof from !== 'number') {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.',
    );
  }
  if (typeof to !== 'number') {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.',
    );
  }
  if (from > to) {
    return arr.slice(to, from);
  }
  return arr.slice(from, to);
}
