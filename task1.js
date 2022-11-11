function sum(a, b) {
  if (Number.isFinite(+a) === false || Number.isFinite(+b) === false) {
    throw Error('Переданный аргумент не может быть приведен к конечному числу');
  }
  return +(+a + +b).toFixed(3); // 1 + 2 = 3 без нулей
}

console.log(sum(1, 2));
