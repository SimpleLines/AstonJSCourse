function* generator() {
  let fib = [0, 1];

  while (true) {
    fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];

    yield fib[fib.length - 1];
  }
}

const gen = generator();
gen.next().value;
