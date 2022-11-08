
function deepCopyObject(obj){
let obj2=Object.assign({age:30},obj)
return obj2
}
 console.log(deepCopyObject({ name:"Adelya",
  age:25,}))

