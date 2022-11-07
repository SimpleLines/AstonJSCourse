let arr = [1,2,3,5,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10]
function getUniqArray(arr){
  let res = Array.from(new Set(arr))
  res.forEach((i) =>{
    if (typeof i !== 'number'){
      throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
    }
    })
    return res
  }
getUniqArray(arr);
