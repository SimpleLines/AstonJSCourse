function getInterval(arr, from, to) {
  let newArr = [];
  if (isNaN(from)) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом')
  }
  else if (isNaN(to)) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом')
  }
  else {
    if (from < to) {
      for (let i=from; i<=to; i++) {
        newArr = newArr.concat(arr[i]);
      }
      return newArr
    }
    else {
      for (let i=to; i<=from; i++) {
        newArr = newArr.concat(arr[i]);
      }
      return newArr
    }
  }
}
function createArr(arr){
  for ( let i = 0; i < 20; i++ ) {
      arr.push(Math.round( Math.random() * 100 ));
  }
  return arr
}
let checkArr= (arr) => {
  for (let i of arr){
    if (isNaN(i)){
      throw Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения')
    }
  }
}
let arr = [];
createArr(arr);
checkArr(arr);
getInterval(arr,'15',10)
