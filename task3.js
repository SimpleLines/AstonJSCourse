// method №1
function* getFibonacci1() {
  let num1 = 0;
  let num2 = 1;

  for (let i; ; i++) {
    yield num1;
    num2 = num1 + num2;
    num1 = num2 - num1;
  }
}

// method №2
const getFibonacci2 = () => {
  let num1 = 0;
  let num2 = 1;
  return {
    next() {
      const obj = { value: num1, done: false };
      num2 = num1 + num2;
      num1 = num2 - num1;
      return obj;
    },
  };
};
