function getUniqArray(arr) {
  if (arr.every((el) => isFinite(el))) {
    return Array.from(new Set(arr));
  } else {
    throw `"В getUniqArray был передан невалидный параметр. Аргумент arr
должен быть массивом чисел"`;
  }
}
