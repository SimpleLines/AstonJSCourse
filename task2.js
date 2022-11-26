function getNumberRadix(number, radix) {
  if (+number < 0 || radix < 2 || radix > 16 || 
    !Number.isInteger(+number) || !Number.isInteger(+radix)) {
     throw Error('Функция getNumberRadix была вызвана с некорректными параметрами')
  } else {
    return (+number).toString(radix)
  }
}
