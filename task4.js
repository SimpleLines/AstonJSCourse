function getUniqArray(arr) {
  let set = new Set();
  for (let item of arr) {
    if (typeof item !== 'number')
      throw TypeError('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
    set.add(item);
  }
  return Array.from(set);
}