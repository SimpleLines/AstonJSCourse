function* getFibonacci() {
  let fib = [0];
  yield fib[fib.length - 1];
  fib.push(1);

  while (true) {
    if (fib.length > 1) {
      fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];

      yield fib[fib.length - 1];
    }
  }
}
