const getUniqArray = (arr) => {
  arr.map((item) => {
    if (!(typeof item === 'number')) {
      throw Error(
        'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
      );
    }
  });
  return [...new Set(arr)];
};
