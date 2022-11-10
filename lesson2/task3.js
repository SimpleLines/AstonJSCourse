function getFibonacci() {
  return {
    now: 2,
    arr: [0, 1],
    next() {
      this.value = this.arr[this.now - 2] + this.arr[this.now - 1];
      this.arr.push(this.value);
      this.now++;
    },
  };
}
const fib = getFibonacci();
fib.next();
fib.next();
fib.next();
console.log(fib.value);
