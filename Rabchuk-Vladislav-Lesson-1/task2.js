function getNumberRadix(number, radix) {
  if (+number > 0 && +radix >= 2 && +radix <= 16) {
    return number.toString(radix);
  } else {
    throw Error("Function getNumberRadix was called with incorrect parameters");
  }
}
