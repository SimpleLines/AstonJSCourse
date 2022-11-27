function getInterval(arr, from, to) {
  if (!arr.every((val) => typeof val == 'number' && !Number.isNaN(val))) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.',
    );
  }
  if (typeof from !== 'number' || Number.isNaN(from)) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.',
    );
  }
  if (typeof to !== 'number' || Number.isNaN(to)) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.',
    );
  }
  if (from > to) {
    return arr.slice(to, from + 1);
  }
  return arr.slice(from, to + 1);
}
