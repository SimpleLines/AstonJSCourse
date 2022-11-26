function getNumberRadix(number, radix) {
  number = Number(number);

  if (!(Number.isInteger(number) && Number.isInteger(radix) && number > 0 && radix >= 2 && radix <= 16)) {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
  return number.toString(radix);
}
