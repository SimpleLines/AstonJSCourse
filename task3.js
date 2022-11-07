function* getFibonacci(){
  let res = [0,1];
  while(true){
    res[res.length] = res[res.length-1] + res[res.length -2]
    yield res[res.length-3]
  }
}
const fib = getFibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
