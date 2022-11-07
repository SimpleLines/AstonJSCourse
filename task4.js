function getUniqArray(arr) {
  if (!arr.every((val) => typeof val == 'number')) {
    throw Error(
      'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел.',
    );
  }
  return Array.from(new Set(arr));
}