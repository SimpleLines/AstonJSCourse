function getNumberRadix(number, radix) {
  number = Number(number);

  if (number > 0 && parseInt(number) === number && parseInt(radix) == radix && radix >= 2 && radix <= 16) {
    return number.toString(radix);
  } else {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
}
