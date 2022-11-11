function getNumberRadix(number, radix) {
  number = Number(number);

  if (!(Number.isInteger(number) && number > 0 && Number.isInteger(radix) && radix >= 2 && radix <= 16)) {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
  return number.toString(radix);
}
