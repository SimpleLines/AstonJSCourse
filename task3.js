function* getFibonacci() {
  let num1 = 0;
  let num2 = 1;

  for (let i; ; i++) {
    yield num1;
    num2 = num1 + num2;
    num1 = num2 - num1;
  }
}
