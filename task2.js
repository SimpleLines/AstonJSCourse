function getNumberRadix(number, radix) {
  if (Number(number) > 0 && Number.isInteger(Number(number)) && radix >= 2 && radix <= 16) {
    return Number(number).toString(radix);
  } else {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
}
