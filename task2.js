function getNumberRadix(number, radix) {
  const terms = number > 0 && !Number.isNaN(number) && Number.isInteger(number) && radix > 1 && radix < 17;

  if (terms) {
    return (+number).toString(+radix);
  } else {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
}
