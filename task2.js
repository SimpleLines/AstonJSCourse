function getNumberRadix(number, radix) {
  if (!(parseInt(number) == number && number > 0 && Number.isInteger(radix) && radix >= 2 && radix <= 16)) {
    throw new TypeError('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
  return parseInt(number).toString(radix);
}