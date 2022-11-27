function getInterval(arr, from, to) {
  const arrIsValid = arr.every(
    (el) => typeof el === 'number' && !Number.isNaN(el)
  );
  const fromIsValid =
    typeof from === 'number' && !Number.isNaN(from) && Number.isFinite(from);
  const toIsValid =
    typeof to === 'number' && !Number.isNaN(to) && Number.isFinite(to);

  if (arrIsValid && fromIsValid && toIsValid) {
    const min = from < to ? from : to;
    const max = from > to ? from : to;
    return arr.filter((el) => el >= min && el <= max);
  }
  if (!arrIsValid) {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр arr
должен содержать только числовые значения"`;
  }
  if (!fromIsValid) {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр from
должен быть числом"`;
  }
  {
    throw `"В функцию getInterval были переданы невалидные параметры. Параметр to
должен быть числом"`;
  }
}
