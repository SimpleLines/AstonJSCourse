// const obj={
//   name:"Adelya",
//   age:25,

// }

// const obj2=Object.assign(obj,{})
// obj.age=20
// // console.log(obj2)

let arr = [2, 2, 3];
let arr2 = [];
function getUniqArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      if (!arr2.includes(arr[i])) {
        arr2.push(arr[i]);
      }
    } else {
      throw Error(
        "В getUniqArray был передан невалидный параметр.Аргумент arr должен быть массивом чисел"
      );
    }
  }
  return arr2;
}
console.log(getUniqArray([6, 5, 5, "прпр"]));

function getInterval(arr, from, to) {
  let indexFrom = arr.indexOf(from); //0
  let indexTo = arr.indexOf(to); //2
  if (from > to) {
    return arr.slice(indexFrom, indexTo + 1).reverse();
  } else {
    return arr.slice(indexFrom, indexTo + 1);
  }
}
console.log(getInterval([5, 2, 7], 5, 7));
