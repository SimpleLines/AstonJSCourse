function getInterval(arr, from, to) {
  const arrIsValid = arr.every((el) => isFinite(el));
  const fromIsValid = isFinite(from);
  const toIsValid = isFinite(to);

  if (arrIsValid && fromIsValid && toIsValid) {
    const minMax = new Array(from, to);
    const min = Math.min(...minMax);
    const max = Math.max(...minMax);
    return arr.filter((el) => el >= min && el <= max);
  } else if (!arrIsValid) {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр arr
должен содержать только числовые значения"`;
  } else if (!fromIsValid) {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр from
должен быть числом"`;
  } else {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр to
должен быть числом"`;
  }
}
