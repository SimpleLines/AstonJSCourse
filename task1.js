function sum(a, b) {
  if (Number.isFinite(+a) === false || Number.isFinite(+b) === false) {
    throw Error('Переданный аргумент не может быть приведен к конечному числу');
  }
  return Number((+a + +b).toFixed(3));
}
