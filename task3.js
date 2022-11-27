function getFibonacci() {
  let check = true;
  let previousValue = 0;
  let currentValue = 0;

  return {  
    next() {
      let nextValue;
      if (check) {
        nextValue = 0;
        check = false;
      }
      else {
        nextValue = currentValue === 0 ? 1 : previousValue + currentValue;
        previousValue = currentValue;
        currentValue = nextValue;
      }
      return {value: nextValue, done: false};
    }
  }
}