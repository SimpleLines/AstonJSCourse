function getUniqArray(arr) {
  if (arr.every((el) => !Number.isNaN(el) && typeof el === 'number')) {
    return Array.from(new Set(arr));
  }
  throw `"В getUniqArray был передан невалидный параметр. Аргумент arr
должен быть массивом чисел"`;
}
