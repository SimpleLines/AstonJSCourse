//method №1
const getUniqArray1 = (arr) => {
  const uniqArray = [];
  arr.map((item) => {
    if (!(typeof item === 'number')) {
      throw Error(
        'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
      );
    }
    if (!uniqArray.includes(item)) {
      uniqArray.push(item);
    }
  });
  return uniqArray;
};

//method №2
const getUniqArray2 = (arr) => {
  arr.map((item) => {
    if (!(typeof item === 'number')) {
      throw Error(
        'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
      );
    }
  });
  return [...new Set(arr)];
};
