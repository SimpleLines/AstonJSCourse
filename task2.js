function getNumberRadix(number, radix) {
  if (+number > 0 && Number.isInteger(+number) && +radix >= 2 && +radix <= 16) {
    return (+number).toString(+radix);
  }
  throw Error("Function getNumberRadix was called with incorrect parameters");
}
