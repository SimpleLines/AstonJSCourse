function getInterval(arr, from, to) { 
  if (arr.find((number) => !(Number.isFinite(number) || Number.isNaN(number))))
    throw TypeError('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения');
  else if (!Number.isFinite(from))
    throw TypeError('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.');
  else if (!Number.isFinite(to))
    throw TypeError('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.');

  if (from > to) 
    return arr.filter((number) => number >= to && number <= from);
  return arr.filter((number) => number >= from && number <= to);
}