function getFibonacci() {
  let fib1 = 1;
  let fib2 = 0;
  return {
    next() {
      let current = fib2;
      fib2 = fib1;
      fib1 += current;
      return { value: current, done: false };
    },
  };
}
const fib = getFibonacci();

// вариант с генератором
function* getFibonacciGenerator() {
  let fib1 = 1;
  let fib2 = 0;
  while (1) {
    let current = fib2;
    fib2 = fib1;
    fib1 += current;
    yield current;
  }
}
