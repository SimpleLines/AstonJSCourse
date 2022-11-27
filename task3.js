function* getFibonacci(){
  let res = [0,1];
  while(true){
    res[res.length] = res[res.length-1] + res[res.length -2];
    yield res[res.length-3];
  }
}
