const sum = (a, b) => {
  return isNaN(a) || isNaN(b)? 'Неккоректные числа': (+a + (+b)).toFixed(3);
}
(sum(1, 2));
(sum(0.6, 0.7));
(sum(0.1, 0.2));

function getNumberRadix(number, radix) {
  if (+number < 0 || radix < 2 || radix > 16 || 
    isNaN(number) || isNaN(radix) || radix.toString().includes('.') || number.toString().includes('.')) {
     throw Error('Функция getNumberRadix была вызвана с некорректными параметрами')
  } else {
    return (+number).toString(radix)
  }
}
getNumberRadix(4, 2);
getNumberRadix('16', 8);
getNumberRadix('Hello', 4);
getNumberRadix(10, 32);
getNumberRadix(10, 'JS');
